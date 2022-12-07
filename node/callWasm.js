require("./wasm_exec_tiny");
const fs = require("fs")

async function callWasm(...args){
  return new Promise((resolve)=>{
    const go = new Go();

    WebAssembly.instantiate(fs.readFileSync("./wasmbin"), go.importObject).then(function (obj) {
      let wasm = obj.instance;
      let res = wasm.exports.fuga(...args) 
      resolve(res);
    })
  })
}

module.exports = {callWasm}