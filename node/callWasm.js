require("./wasm_exec_tiny");
const fs = require("fs");

async function callWasm() {
  const go = new Go();

  const obj = await WebAssembly.instantiate(
    fs.readFileSync("./wasmbin"),
    go.importObject
  );
  const wasm = obj.instance;

  // GoにStringを渡す
  const text = "Hello World!";
  let addr = insertText(text, wasm);
  const result = wasm.exports.stringFromJS(addr, text.length);
  console.log(result);
}

// https://www.alcarney.me/blog/2020/passing-strings-between-tinygo-wasm/
function insertText(text, module) {
  // Get the address of the writable memory.
  const addr = module.exports.getBuffer();
  const buffer = module.exports.memory.buffer;

  const mem = new Int8Array(buffer);
  const view = mem.subarray(addr, addr + text.length);

  for (let i = 0; i < text.length; i++) {
    view[i] = text.charCodeAt(i);
  }

  // Return the address we started at.
  return addr;
}

callWasm();
