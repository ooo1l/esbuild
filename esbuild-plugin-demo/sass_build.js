const sassPlugin = require("esbuild-plugin-sass");
const esbuild = require("esbuild");

esbuild.build({
  entryPoints: ["esbuild-plugin-demo/style.scss"],
  outfile: "esbuild-plugin-demo/bundle.css",
  bundle: true,
  plugins: [sassPlugin()]
})
.then(() => console.log("⚡ Done"))
.catch(() => process.exit(1));