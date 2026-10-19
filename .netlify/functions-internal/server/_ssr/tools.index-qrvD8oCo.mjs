import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tools.index-qrvD8oCo.js
var $$splitComponentImporter = () => import("./tools.index-BXNPtXq1.mjs");
var Route = createFileRoute("/tools/")({
	validateSearch: (search) => ({
		q: typeof search["q"] === "string" && search["q"] ? search["q"] : void 0,
		category: typeof search["category"] === "string" && search["category"] ? search["category"] : void 0,
		page: Math.max(1, Number(search["page"]) || 1)
	}),
	head: () => ({
		meta: [
			{ title: "All Online Tools Directory — ToolNami" },
			{
				name: "description",
				content: "Browse the full ToolNami directory: PDF, image, text, SEO, developer and conversion tools. Search by name or filter by category."
			},
			{
				name: "robots",
				content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				property: "og:site_name",
				content: "ToolNami"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://toolnami.com/tools"
			},
			{
				property: "og:title",
				content: "All Online Tools Directory — ToolNami"
			},
			{
				property: "og:description",
				content: "Search and filter hundreds of free online tools in one clean directory."
			},
			{
				property: "og:image",
				content: "https://toolnami.com/logo-512.png"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@aniketbhalerao"
			},
			{
				name: "twitter:creator",
				content: "@aniketbhalerao"
			},
			{
				name: "twitter:title",
				content: "All Online Tools Directory — ToolNami"
			},
			{
				name: "twitter:description",
				content: "Search and filter hundreds of free online tools in one clean directory."
			},
			{
				name: "twitter:image",
				content: "https://toolnami.com/logo-512.png"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://toolnami.com/tools"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
