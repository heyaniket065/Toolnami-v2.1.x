import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-CijrTF7M.js
var $$splitComponentImporter = () => import("./auth-DYavXtFE.mjs");
var Route = createFileRoute("/auth")({
	validateSearch: (search) => {
		const raw = String(search["mode"] ?? "login");
		return { mode: raw === "signup" || raw === "forgot" ? raw : "login" };
	},
	head: () => ({
		meta: [
			{ title: "Sign In or Create Your ToolNami Account" },
			{
				name: "description",
				content: "Log in or sign up for ToolNami to save favorite tools, sync your preferences and unlock upcoming features. Guests can keep using every tool for free."
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
				content: "https://toolnami.com/auth"
			},
			{
				property: "og:title",
				content: "Sign In or Create Your ToolNami Account"
			},
			{
				property: "og:description",
				content: "Save favorites and sync preferences with a free ToolNami account."
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
				content: "Sign In or Create Your ToolNami Account"
			},
			{
				name: "twitter:description",
				content: "Save favorites and sync preferences with a free ToolNami account."
			},
			{
				name: "twitter:image",
				content: "https://toolnami.com/logo-512.png"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://toolnami.com/auth"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
