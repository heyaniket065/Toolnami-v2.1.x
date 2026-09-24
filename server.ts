process.env.HOST = process.env.HOST || "0.0.0.0";
process.env.PORT = process.env.PORT || "3000";
import("./.output/server/index.mjs").catch(console.error);
