const fs = require("fs");
const path = require("path");

const serverTs = path.join(__dirname, "..", "server.ts");
if (fs.existsSync(serverTs)) {
  fs.unlinkSync(serverTs);
}
