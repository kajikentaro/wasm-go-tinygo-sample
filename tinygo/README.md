## 使い方

```
tinygo build -o wasmbin -target wasm wasm.go
node main.js
```

## wasm_exec_tiny

wasm_exec_tiny は以下コマンドで取得できる

```
cp $(tinygo env TINYGOROOT)/targets/wasm_exec.js wasm_exec_tiny.js
```

## 参考

- https://wasmbyexample.dev/examples/exports/exports.go.en-us.html
