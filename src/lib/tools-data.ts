import { supabase } from "@/integrations/supabase/client";

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

export const categoriesQuery = {
  queryKey: ["tool-categories"],
  queryFn: async (): Promise<ToolCategory[]> => {
    const { data, error } = await supabase
      .from("tool_categories")
      .select("id, name, slug, icon, description")
      .order("name");
    if (error) throw error;
    return data ?? [];
  },
  staleTime: 5 * 60 * 1000,
};

export const featuredToolsQuery = {
  queryKey: ["tools", "featured"],
  queryFn: async (): Promise<Tool[]> => {
    const { data, error } = await supabase
      .from("tools")
      .select("id, title, slug, description, thumbnail_url, category_id, featured, views")
      .eq("status", "published")
      .eq("featured", true)
      .order("views", { ascending: false })
      .limit(6);
    if (error) throw error;
    return data ?? [];
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
      const from = (page - 1) * TOOLS_PER_PAGE;
      let query = supabase
        .from("tools")
        .select("id, title, slug, description, thumbnail_url, category_id, featured, views", {
          count: "exact",
        })
        .eq("status", "published");

      if (categoryId) query = query.eq("category_id", categoryId);
      if (search.trim()) {
        const term = `%${search.trim()}%`;
        query = query.or(`title.ilike.${term},description.ilike.${term}`);
      }

      const { data, error, count } = await query
        .order("featured", { ascending: false })
        .order("title")
        .range(from, from + TOOLS_PER_PAGE - 1);

      if (error) throw error;
      return { tools: data ?? [], total: count ?? 0 };
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
