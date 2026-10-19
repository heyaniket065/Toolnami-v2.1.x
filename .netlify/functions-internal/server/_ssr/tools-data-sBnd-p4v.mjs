import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as COMPLETE_TOOLS } from "./ssr.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as supabase } from "./client-CX2Xukze.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tools-data-sBnd-p4v.js
var import_jsx_runtime = require_jsx_runtime();
function Skeleton({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("animate-pulse rounded-md bg-primary/10", className),
		...props
	});
}
var DEFAULT_CATEGORIES = [
	{
		id: "pdf",
		name: "PDF Tools",
		slug: "pdf",
		icon: "FileText",
		description: "Compress, merge, split, and convert PDF documents"
	},
	{
		id: "image",
		name: "Image Tools",
		slug: "image",
		icon: "Image",
		description: "Compress, resize, convert, and edit images"
	},
	{
		id: "text",
		name: "Text Tools",
		slug: "text",
		icon: "Type",
		description: "Word counters, case converters, and text formatters"
	},
	{
		id: "developer",
		name: "Developer Tools",
		slug: "developer",
		icon: "Code",
		description: "QR code, password, UUID, and code formatters"
	},
	{
		id: "seo",
		name: "SEO Tools",
		slug: "seo",
		icon: "Search",
		description: "Meta tags, sitemaps, and robots.txt generators"
	},
	{
		id: "calculator",
		name: "Calculators",
		slug: "calculator",
		icon: "Calculator",
		description: "Age, BMI, EMI, and percentage calculators"
	},
	{
		id: "utility",
		name: "Utility Tools",
		slug: "utility",
		icon: "Wrench",
		description: "Unit, time, and currency converters"
	},
	{
		id: "ai",
		name: "AI Tools",
		slug: "ai",
		icon: "Sparkles",
		description: "AI content, title, and caption generation"
	}
];
var ALL_CATALOGUE_TOOLS = COMPLETE_TOOLS.map((t, index) => ({
	id: t.slug,
	title: t.title,
	slug: t.slug,
	description: t.summary,
	thumbnail_url: t.image,
	category_id: t.category,
	featured: t.badge.tone === "featured" || index < 12,
	views: t.baseUses
}));
var categoriesQuery = {
	queryKey: ["tool-categories"],
	queryFn: async () => {
		return DEFAULT_CATEGORIES;
	},
	staleTime: 3e5
};
var featuredToolsQuery = {
	queryKey: ["tools", "featured"],
	queryFn: async () => {
		return ALL_CATALOGUE_TOOLS.filter((t) => t.featured).slice(0, 6);
	},
	staleTime: 6e4
};
function toolsPageQuery(params) {
	const { search, categoryId, page } = params;
	return {
		queryKey: [
			"tools",
			"list",
			search,
			categoryId,
			page
		],
		queryFn: async () => {
			const targetCat = categoryId ? categoryId.toLowerCase().replace(/^cat-/, "").replace(/-tools$/, "").trim() : null;
			let filtered = [...ALL_CATALOGUE_TOOLS];
			if (targetCat) filtered = filtered.filter((t) => {
				return (t.category_id || "").toLowerCase().replace(/^cat-/, "").replace(/-tools$/, "") === targetCat;
			});
			if (search.trim()) {
				const s = search.trim().toLowerCase();
				filtered = filtered.filter((t) => t.title.toLowerCase().includes(s) || t.slug.toLowerCase().includes(s) || t.description && t.description.toLowerCase().includes(s));
			}
			filtered.sort((a, b) => {
				if (a.featured && !b.featured) return -1;
				if (!a.featured && b.featured) return 1;
				return a.title.localeCompare(b.title);
			});
			const total = filtered.length;
			const from = (page - 1) * 12;
			return {
				tools: filtered.slice(from, from + 12),
				total
			};
		},
		staleTime: 3e4
	};
}
function pageContentQuery(pageName) {
	return {
		queryKey: ["page-content", pageName],
		queryFn: async () => {
			const { data, error } = await supabase.from("page_content").select("page_name, title, content, updated_at").eq("page_name", pageName).maybeSingle();
			if (error) throw error;
			return data;
		},
		staleTime: 3e5
	};
}
//#endregion
export { toolsPageQuery as a, pageContentQuery as i, categoriesQuery as n, featuredToolsQuery as r, Skeleton as t };
