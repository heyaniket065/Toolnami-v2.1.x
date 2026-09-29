const fs = require("fs");
const path = require("path");

try {
  const rootDir = path.join(__dirname, "..");
  const distRoot = path.join(rootDir, "dist");
  const distClient = path.join(distRoot, "client");
  const outputPublic = path.join(rootDir, ".output", "public");

  // 1. Ensure dist and dist/client directories exist unconditionally
  fs.mkdirSync(distRoot, { recursive: true });
  fs.mkdirSync(distClient, { recursive: true });

  // 2. If .output/public exists (e.g. node-server preset), copy assets to dist and dist/client
  if (fs.existsSync(outputPublic)) {
    fs.cpSync(outputPublic, distRoot, { recursive: true });
    fs.cpSync(outputPublic, distClient, { recursive: true });
    console.log("[postbuild] Copied .output/public to dist and dist/client");
  }

  // 3. For Netlify preset, Nitro outputs static assets directly into dist/.
  // Copy all assets/files from dist/ into dist/client/ (excluding client itself)
  // so both publish="dist" (netlify.toml) and publish="dist/client" (UI default) work seamlessly.
  const distEntries = fs.readdirSync(distRoot, { withFileTypes: true });
  for (const entry of distEntries) {
    if (entry.name === "client") continue;
    const srcPath = path.join(distRoot, entry.name);
    const destPath = path.join(distClient, entry.name);
    try {
      fs.cpSync(srcPath, destPath, { recursive: true, force: true });
    } catch (copyErr) {
      console.warn(`[postbuild] Warning copying ${entry.name} to dist/client:`, copyErr.message);
    }
  }

  // 4. Ensure a valid index.html exists in both dist/ and dist/client/
  const fallbackHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ToolNami - Everyday Online Tools</title>
  <meta name="description" content="Fast, free online tools for everyday work — PDF, image, text, SEO and developer utilities." />
  <link rel="icon" href="/favicon.ico" />
</head>
<body>
  <div id="root"></div>
  <script>
    if (window.location.pathname !== '/' && !window.location.pathname.startsWith('/assets')) {
      window.location.reload();
    }
  </script>
</body>
</html>`;

  const indexDistRoot = path.join(distRoot, "index.html");
  if (!fs.existsSync(indexDistRoot)) {
    fs.writeFileSync(indexDistRoot, fallbackHtml, "utf8");
    console.log("[postbuild] Created fallback index.html in dist/");
  }

  const indexDistClient = path.join(distClient, "index.html");
  if (!fs.existsSync(indexDistClient)) {
    fs.writeFileSync(indexDistClient, fallbackHtml, "utf8");
    console.log("[postbuild] Created fallback index.html in dist/client/");
  }

  // 5. Generate server.ts for local dev or Cloud Run fallback if needed
  const serverTsContent = `process.env.HOST = process.env.HOST || "0.0.0.0";
process.env.PORT = process.env.PORT || "3000";

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const nodeServerEntry = path.join(__dirname, ".output", "server", "index.mjs");
const netlifyEntry = path.join(__dirname, ".netlify", "functions-internal", "server", "main.mjs");

if (fs.existsSync(nodeServerEntry)) {
  import(nodeServerEntry).catch(console.error);
} else if (fs.existsSync(netlifyEntry)) {
  console.log("Netlify functions bundle ready at .netlify/functions-internal/server");
} else {
  console.log("Build complete. Ready for deployment.");
}
`;
  fs.writeFileSync(path.join(rootDir, "server.ts"), serverTsContent, "utf8");
  console.log("[postbuild] Postbuild completed successfully.");
} catch (error) {
  console.error("[postbuild] Error during postbuild execution:", error);
  process.exit(1);
}
