import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/client-B7rskZ94.js
function brokeredPreviewStorage() {
	if (typeof window === "undefined") return void 0;
	const host = location.hostname;
	const projectId = [
		"lovableproject.com",
		"lovableproject-dev.com",
		"lovable.app",
		"gpt-eng.com",
		"gptengineer.run"
	].some((z) => host === z || host.endsWith("." + z)) ? host.match(/* @__PURE__ */ new RegExp("^(?:id-preview(?:-[a-z0-9]+)?|project)--([0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})(?:-dev)?(?=\\.|$)", "i"))?.[1] ?? host.match(/* @__PURE__ */ new RegExp("^([0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})(?=[.-])", "i"))?.[1] : void 0;
	const framed = window.parent && window.parent !== window;
	if (!projectId || !framed) return localStorage;
	const dev = host.endsWith(".lovableproject-dev.com") || host.endsWith(".gpt-eng.com");
	const EDITOR = dev ? /^https:\/\/([a-z0-9-]+\.)*(lovable\.dev|gptengineer\.app)$|^http:\/\/localhost:3000$/ : /^https:\/\/([a-z0-9-]+\.)*(lovable\.dev|gptengineer\.app)$/;
	const ancestor = location.ancestorOrigins && location.ancestorOrigins[0] || (document.referrer ? new URL(document.referrer).origin : "");
	const editorOrigins = ancestor && EDITOR.test(ancestor) ? [ancestor] : dev ? ["https://lovable.dev", "http://localhost:3000"] : ["https://lovable.dev"];
	const RESULT = "lovable-preview-auth:result";
	const TIMEOUT = 2e3;
	const newId = () => Math.random().toString(36).slice(2) + Date.now().toString(36);
	const request = (type, key, value) => new Promise((resolve) => {
		const requestId = newId();
		let done = false;
		let timer = null;
		const finish = (r) => {
			if (done) return;
			done = true;
			if (timer) clearTimeout(timer);
			window.removeEventListener("message", onMessage);
			resolve(r);
		};
		const onMessage = (e) => {
			if (editorOrigins.indexOf(e.origin) < 0) return;
			const d = e.data;
			if (d && d.type === RESULT && d.requestId === requestId) finish(d);
		};
		window.addEventListener("message", onMessage);
		const msg = {
			type,
			requestId,
			projectId,
			key
		};
		if (value !== void 0) msg["value"] = value;
		for (const origin of editorOrigins) window.parent.postMessage(msg, origin);
		timer = setTimeout(() => {
			timer = null;
			finish(null);
		}, TIMEOUT);
	});
	let firstGet = true;
	const RETRY_DELAY = 250;
	return {
		getItem: async (key) => {
			let res = await request("lovable-preview-auth:get", key);
			if (!res && firstGet) {
				await new Promise((r) => setTimeout(r, RETRY_DELAY));
				res = await request("lovable-preview-auth:get", key);
			}
			firstGet = false;
			if (res && res.ok && typeof res.value === "string") {
				if (res.value === "") {
					localStorage.removeItem(key);
					return null;
				}
				return res.value;
			}
			return localStorage.getItem(key);
		},
		setItem: (key, value) => {
			localStorage.setItem(key, value);
			return request("lovable-preview-auth:set", key, value).then(() => void 0);
		},
		removeItem: (key) => {
			localStorage.removeItem(key);
			return request("lovable-preview-auth:remove", key).then(() => void 0);
		}
	};
}
function isNewSupabaseApiKey(value) {
	return value.startsWith("sb_publishable_") || value.startsWith("sb_secret_");
}
function createSupabaseFetch(supabaseKey) {
	return (input, init) => {
		const headers = new Headers(typeof Request !== "undefined" && input instanceof Request ? input.headers : void 0);
		if (init?.headers) new Headers(init.headers).forEach((value, key) => headers.set(key, value));
		if (isNewSupabaseApiKey(supabaseKey) && headers.get("Authorization") === `Bearer ${supabaseKey}`) headers.delete("Authorization");
		headers.set("apikey", supabaseKey);
		return fetch(input, {
			...init,
			headers
		});
	};
}
var MOCK_CATEGORIES = [
	{
		id: "cat-pdf",
		name: "PDF Tools",
		slug: "pdf-tools",
		icon: "FileText",
		description: "Compress, merge, convert and manipulate PDF documents"
	},
	{
		id: "cat-image",
		name: "Image Tools",
		slug: "image-tools",
		icon: "Image",
		description: "Resize, optimize, crop and convert your image files"
	},
	{
		id: "cat-converters",
		name: "Converters",
		slug: "converters",
		icon: "RefreshCw",
		description: "Fast file and format conversion in your browser"
	},
	{
		id: "cat-generators",
		name: "Generators",
		slug: "generators",
		icon: "QrCode",
		description: "Instant QR code, barcode, and utility generators"
	},
	{
		id: "cat-developer",
		name: "Developer Tools",
		slug: "developer-tools",
		icon: "Code",
		description: "Formatting, encoding, and web developer essentials"
	}
];
var MOCK_TOOLS = [
	{
		id: "1",
		title: "PDF Compressor",
		slug: "pdf-compressor",
		description: "Reduce PDF file size while maintaining quality.",
		thumbnail_url: null,
		category_id: "cat-pdf",
		featured: true,
		views: 1420,
		status: "published"
	},
	{
		id: "2",
		title: "PDF Merge",
		slug: "pdf-merge",
		description: "Combine multiple PDF files into a single document.",
		thumbnail_url: null,
		category_id: "cat-pdf",
		featured: true,
		views: 980,
		status: "published"
	},
	{
		id: "3",
		title: "Image Compressor",
		slug: "image-compressor",
		description: "Compress images without noticeable quality loss.",
		thumbnail_url: null,
		category_id: "cat-image",
		featured: true,
		views: 1250,
		status: "published"
	},
	{
		id: "4",
		title: "JPG to PDF",
		slug: "jpg-to-pdf",
		description: "Convert JPG images into PDF documents.",
		thumbnail_url: null,
		category_id: "cat-converters",
		featured: true,
		views: 890,
		status: "published"
	},
	{
		id: "5",
		title: "QR Code Generator",
		slug: "qr-code-generator",
		description: "Generate custom QR codes instantly.",
		thumbnail_url: null,
		category_id: "cat-generators",
		featured: true,
		views: 1650,
		status: "published"
	}
];
function createMockSupabaseClient() {
	console.warn("[Supabase] Supabase environment variables not configured. Using in-memory fallback client.");
	function createQueryBuilder(tableName) {
		let items = [];
		if (tableName === "tool_categories") items = [...MOCK_CATEGORIES];
		else if (tableName === "tools") items = [...MOCK_TOOLS];
		let isSingle = false;
		let isMaybeSingle = false;
		const builder = {
			select(_cols, _opts) {
				return builder;
			},
			eq(field, val) {
				items = items.filter((item) => item[field] === val);
				return builder;
			},
			neq(field, val) {
				items = items.filter((item) => item[field] !== val);
				return builder;
			},
			or(_term) {
				return builder;
			},
			order(field, opts) {
				const asc = opts?.ascending !== false;
				items.sort((a, b) => {
					const valA = a[field];
					const valB = b[field];
					if (typeof valA === "number" && typeof valB === "number") return asc ? valA - valB : valB - valA;
					return asc ? String(valA ?? "").localeCompare(String(valB ?? "")) : String(valB ?? "").localeCompare(String(valA ?? ""));
				});
				return builder;
			},
			limit(n) {
				items = items.slice(0, n);
				return builder;
			},
			range(from, to) {
				items = items.slice(from, to + 1);
				return builder;
			},
			single() {
				isSingle = true;
				return builder;
			},
			maybeSingle() {
				isMaybeSingle = true;
				return builder;
			},
			insert(_data) {
				return builder;
			},
			update(_data) {
				return builder;
			},
			delete() {
				return builder;
			},
			then(resolve) {
				const total = items.length;
				if (isSingle || isMaybeSingle) return Promise.resolve(resolve({
					data: items[0] ?? null,
					error: null,
					count: total
				}));
				return Promise.resolve(resolve({
					data: items,
					error: null,
					count: total
				}));
			}
		};
		return builder;
	}
	return {
		auth: {
			getSession: async () => ({
				data: { session: null },
				error: null
			}),
			getUser: async () => ({
				data: { user: null },
				error: null
			}),
			onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
			signInWithPassword: async () => ({
				data: {
					user: null,
					session: null
				},
				error: /* @__PURE__ */ new Error("Authentication requires connecting Supabase.")
			}),
			signUp: async () => ({
				data: {
					user: null,
					session: null
				},
				error: /* @__PURE__ */ new Error("Authentication requires connecting Supabase.")
			}),
			signOut: async () => ({ error: null }),
			resetPasswordForEmail: async () => ({
				data: {},
				error: null
			})
		},
		from: (table) => createQueryBuilder(table)
	};
}
function createSupabaseClient() {
	const SUPABASE_URL = {
		"BASE_URL": "/",
		"DEV": true,
		"MODE": "production",
		"PROD": false,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/"
	}["VITE_SUPABASE_URL"] || process.env["SUPABASE_URL"];
	const SUPABASE_PUBLISHABLE_KEY = {
		"BASE_URL": "/",
		"DEV": true,
		"MODE": "production",
		"PROD": false,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/"
	}["VITE_SUPABASE_PUBLISHABLE_KEY"] || process.env["SUPABASE_PUBLISHABLE_KEY"];
	if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) return createMockSupabaseClient();
	return createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
		global: { fetch: createSupabaseFetch(SUPABASE_PUBLISHABLE_KEY) },
		auth: {
			storage: brokeredPreviewStorage(),
			persistSession: true,
			autoRefreshToken: true
		}
	});
}
var _supabase;
var supabase = new Proxy({}, { get(_, prop, receiver) {
	if (!_supabase) _supabase = createSupabaseClient();
	return Reflect.get(_supabase, prop, receiver);
} });
//#endregion
export { supabase as t };
