import { P as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as getToolBySlug } from "./ssr.mjs";
import { n as toolJsonLd } from "./tool-shell-C1AsPVP0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tools._slug-DDHa8k7d.js
var $$splitComponentImporter = () => import("./tools._slug-sErClUUB.mjs");
var Route = createFileRoute("/tools/$slug")({
	loader: ({ params }) => {
		const tool = getToolBySlug(params.slug);
		if (!tool) throw notFound();
		return { tool };
	},
	head: ({ loaderData }) => {
		const tool = loaderData?.tool;
		if (!tool) return { meta: [{ title: "Tool Not Found — ToolNami" }] };
		const toolUrl = `https://toolnami.com/tools/${tool.slug}`;
		return {
			meta: [
				{ title: tool.seoTitle },
				{
					name: "description",
					content: tool.seoDescription
				},
				{
					name: "keywords",
					content: tool.keywords.join(", ")
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
					property: "og:title",
					content: tool.seoTitle
				},
				{
					property: "og:description",
					content: tool.seoDescription
				},
				{
					property: "og:image",
					content: tool.image
				},
				{
					property: "og:type",
					content: "website"
				},
				{
					property: "og:url",
					content: toolUrl
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
					content: tool.seoTitle
				},
				{
					name: "twitter:description",
					content: tool.seoDescription
				},
				{
					name: "twitter:image",
					content: tool.image
				}
			],
			links: [{
				rel: "canonical",
				href: toolUrl
			}],
			scripts: [{
				type: "application/ld+json",
				children: toolJsonLd({
					name: tool.title,
					description: tool.technicalDescription || tool.summary,
					url: toolUrl,
					faqs: tool.faqs
				})
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
