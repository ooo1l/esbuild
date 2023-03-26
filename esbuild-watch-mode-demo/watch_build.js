const esbuild = require("esbuild");

esbuild.build({
    entryPoints: ["simple-demo/index.ts"],
    outfile: "esbuild-watch-mode-demo/output.js",
    bundle: true,
    loader: {".ts": "ts"},
    watch: true
  })
  .then(() => console.log("⚡ Done"))
  .catch(() => process.exit(1));