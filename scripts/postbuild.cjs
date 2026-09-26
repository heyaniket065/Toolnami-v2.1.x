const fs = require("fs");
const path = require("path");

// 1. Ensure dist/client exists and has public assets
const outputPublic = path.join(__dirname, "..", ".output", "public");
const dist = path.join(__dirname, "..", "dist", "client");
if (fs.existsSync(outputPublic)) {
  fs.mkdirSync(dist, { recursive: true });
  fs.cpSync(outputPublic, dist, { recursive: true });
}

// 2. Ensure dist/client/index.html exists as a valid HTML fallback
const indexHtmlPath = path.join(dist, "index.html");
if (!fs.existsSync(indexHtmlPath)) {
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
  fs.writeFileSync(indexHtmlPath, fallbackHtml);
}

// 3. Generate server.ts for Cloud Run entry point
const serverTsContent = `process.env.HOST = process.env.HOST || "0.0.0.0";
process.env.PORT = process.env.PORT || "3000";
import("./.output/server/index.mjs").catch(console.error);
`;
fs.writeFileSync(path.join(__dirname, "..", "server.ts"), serverTsContent);
