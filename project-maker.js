const fs = require("fs");
try {
  const projectName = process.argv.slice(2)[0] || "Project";
  fs.mkdirSync(projectName);
  fs.writeFileSync(`${projectName}/index.html`, "");
  fs.writeFileSync(`${projectName}/app.css`, "");
  fs.writeFileSync(`${projectName}/app.js`, "");
} catch (e) {
  console.log(e);
}
