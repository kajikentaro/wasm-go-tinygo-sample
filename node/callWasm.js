require("./wasm_exec_tiny");
const fs = require("fs")

async function callWasm(...args){
  return new Promise((resolve)=>{
    const go = new Go();

    WebAssembly.instantiate(fs.readFileSync("./wasmbin"), go.importObject).then(function (obj) {
      let wasm = obj.instance;
      let addr = insertText("1", wasm)
      console.log(wasm.exports.readBuffer(addr));
      addr = insertText("Firer5", wasm)
      console.log(wasm.exports.readBuffer(addr));
      addr = insertText("Fire", wasm)
      console.log(wasm.exports.readBuffer(addr));
      resolve();
    })
  })
}


// https://www.alcarney.me/blog/2020/passing-strings-between-tinygo-wasm/
function insertText(text, module) {

   // Get the address of the writable memory.
   let addr = module.exports.getBuffer()
   let buffer = module.exports.memory.buffer

   let mem = new Int8Array(buffer)
   let view = mem.subarray(addr, addr + text.length)

   for (let i = 0; i < text.length; i++) {
      view[i] = text.charCodeAt(i)
   }

   // Return the address we started at.
   return addr
}

callWasm()