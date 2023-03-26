const esbuild = require('esbuild')

esbuild.build({
  entryPoints: ["simple-demo/index.ts"],
  outfile: "esbuild-api-demo/output.js",
  bundle: true,
  loader: {".ts": "ts"}
})
.then(() => console.log("⚡⚡⚡ Done"))
.catch(() => process.exit(1));
