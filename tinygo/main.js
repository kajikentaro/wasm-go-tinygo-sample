"use strict";

require("./wasm_exec_tiny");

const go = new Go();

WebAssembly.instantiate(fs.readFileSync("./wasmbin"), go.importObject).then(function (obj) {
  let wasm = obj.instance;
  go.run(wasm);
  console.log(wasm.exports.fuga(2,3))
})
