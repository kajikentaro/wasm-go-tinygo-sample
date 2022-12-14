"use strict";

globalThis.require = require;
globalThis.fs = require("fs");
globalThis.TextEncoder = require("util").TextEncoder;
globalThis.TextDecoder = require("util").TextDecoder;
globalThis.performance = {
	now() {
		const [sec, nsec] = process.hrtime();
		return sec * 1000 + nsec / 1000000;
	},
};

const crypto = require("crypto");
globalThis.crypto = {
	getRandomValues(b) {
		crypto.randomFillSync(b);
	},
};

require("./wasm_exec_go");

const go = new Go();
WebAssembly.instantiate(fs.readFileSync("./wasmbin"), go.importObject).then(function (obj) {
  let wasm = obj.instance;
  go.run(wasm);
})
