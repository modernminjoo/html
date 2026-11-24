import * as esbuild from "esbuild"; import path from "path";
const S = f => path.resolve("shim", f);
const map = { zlib:S("zlib.js"), crypto:S("crypto.js"), path:path.resolve("node_modules/path-browserify/index.js") };
const optional = /^(pdfjs-dist|@hyzyla\/pdfium|sharp|onnxruntime-node|@huggingface\/tokenizers|puppeteer-core|@modelcontextprotocol)/;
const plugin = { name:"node-shims", setup(b){
  b.onResolve({filter:/^(node:)?(zlib|crypto|fs|fs\/promises|os|module|child_process|url|util|stream|stream\/promises|path|worker_threads|events|http|https|net|tls|readline|process)$/}, a => {
    const n = a.path.replace(/^node:/,""); return { path: map[n] || S("stub.js") }; });
  b.onLoad({filter:/kordoc[\\/]dist[\\/].*\.js$/}, async a => {
    let src = await (await import("fs/promises")).readFile(a.path, "utf8");
    // 브라우저에는 nodeStream이 없어 jszip의 async로 바꿈(압축 해제 크기 검사는 그대로 유지)
    src = src.split('file.nodeStream("nodebuffer")').join('(()=>{const h={};const s={on(e,f){h[e]=f;return s},pause(){}};file.async("uint8array").then(u=>{h.data&&h.data(globalThis.Buffer.from(u));h.end&&h.end()},e=>h.error&&h.error(e));return s;})()');
    return { contents: src, loader: "js" };
  });
  b.onResolve({filter:/^pdfjs-dist/}, () => ({ path:S("pdf.js") })); b.onResolve({filter:optional}, () => ({ path:S("stub.js") }));
}};
const r = await esbuild.build({ entryPoints:["shim/entry.js"], bundle:true, platform:"browser", format:"iife", minify:true,
  outfile:"kordoc.browser.js", inject:["shim/globals.js"], plugins:[plugin], logLevel:"error", metafile:true });
console.log("ok");
