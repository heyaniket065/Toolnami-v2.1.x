process.env.HOST = process.env.HOST || "0.0.0.0";
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
