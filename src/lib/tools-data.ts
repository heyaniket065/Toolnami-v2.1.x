import { supabase } from "@/integrations/supabase/client";
import { COMPLETE_TOOLS, getToolBySlug } from "./complete-tools";

export type ToolCategory = {
  id: string;
  name: string;
  slug: string;
  icon: string | null;
  description: string | null;
};

export type Tool = {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  thumbnail_url: string | null;
  category_id: string | null;
  featured: boolean;
  views: number;
};

export const TOOLS_PER_PAGE = 12;

export const DEFAULT_CATEGORIES: ToolCategory[] = [
  {
    id: "pdf",
    name: "PDF Tools",
    slug: "pdf",
    icon: "FileText",
    description: "Compress, merge, split, and convert PDF documents",
  },
  {
    id: "image",
    name: "Image Tools",
    slug: "image",
    icon: "Image",
    description: "Compress, resize, convert, and edit images",
  },
  {
    id: "text",
    name: "Text Tools",
    slug: "text",
    icon: "Type",
    description: "Word counters, case converters, and text formatters",
  },
  {
    id: "developer",
    name: "Developer Tools",
    slug: "developer",
    icon: "Code",
    description: "QR code, password, UUID, and code formatters",
  },
  {
    id: "seo",
    name: "SEO Tools",
    slug: "seo",
    icon: "Search",
    description: "Meta tags, sitemaps, and robots.txt generators",
  },
  {
    id: "calculator",
    name: "Calculators",
    slug: "calculator",
    icon: "Calculator",
    description: "Age, BMI, EMI, and percentage calculators",
  },
  {
    id: "utility",
    name: "Utility Tools",
    slug: "utility",
    icon: "Wrench",
    description: "Unit, time, and currency converters",
  },
  {
    id: "ai",
    name: "AI Tools",
    slug: "ai",
    icon: "Sparkles",
    description: "AI content, title, and caption generation",
  },
];

export const ALL_CATALOGUE_TOOLS: Tool[] = COMPLETE_TOOLS.map((t, index) => ({
  id: t.slug,
  title: t.title,
  slug: t.slug,
  description: t.summary,
  thumbnail_url: t.image,
  category_id: t.category,
  featured: t.badge.tone === "featured" || index < 12,
  views: t.baseUses,
}));

export const categoriesQuery = {
  queryKey: ["tool-categories"],
  queryFn: async (): Promise<ToolCategory[]> => {
    return DEFAULT_CATEGORIES;
  },
  staleTime: 5 * 60 * 1000,
};

export const featuredToolsQuery = {
  queryKey: ["tools", "featured"],
  queryFn: async (): Promise<Tool[]> => {
    return ALL_CATALOGUE_TOOLS.filter((t) => t.featured).slice(0, 6);
  },
  staleTime: 60 * 1000,
};

export function toolsPageQuery(params: {
  search: string;
  categoryId: string | null;
  page: number;
}) {
  const { search, categoryId, page } = params;
  return {
    queryKey: ["tools", "list", search, categoryId, page],
    queryFn: async (): Promise<{ tools: Tool[]; total: number }> => {
      // Normalize category id (handles legacy 'cat-pdf' -> 'pdf', 'cat-image' -> 'image')
      const targetCat = categoryId
        ? categoryId
            .toLowerCase()
            .replace(/^cat-/, "")
            .replace(/-tools$/, "")
            .trim()
        : null;

      let filtered = [...ALL_CATALOGUE_TOOLS];

      if (targetCat) {
        filtered = filtered.filter((t) => {
          const tCat = (t.category_id || "")
            .toLowerCase()
            .replace(/^cat-/, "")
            .replace(/-tools$/, "");
          return tCat === targetCat;
        });
      }

      if (search.trim()) {
        const s = search.trim().toLowerCase();
        filtered = filtered.filter(
          (t) =>
            t.title.toLowerCase().includes(s) ||
            t.slug.toLowerCase().includes(s) ||
            (t.description && t.description.toLowerCase().includes(s)),
        );
      }

      // Sort featured first, then alphabetical
      filtered.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return a.title.localeCompare(b.title);
      });

      const total = filtered.length;
      const from = (page - 1) * TOOLS_PER_PAGE;
      const paginated = filtered.slice(from, from + TOOLS_PER_PAGE);

      return { tools: paginated, total };
    },
    staleTime: 30 * 1000,
  };
}

export function pageContentQuery(pageName: string) {
  return {
    queryKey: ["page-content", pageName],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("page_content")
        .select("page_name, title, content, updated_at")
        .eq("page_name", pageName)
        .maybeSingle();
      if (error) throw error;
      return data;
    },
    staleTime: 5 * 60 * 1000,
  };
}
