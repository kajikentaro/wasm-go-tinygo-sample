async function myTest() {
  const callWasm = require("./callWasm");
  console.log(await callWasm.callWasm(1, 2));
}

myTest()