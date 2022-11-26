こちらでは、function の export 機能は使えない。

## 使い方

```
GOOS=js GOARCH=wasm go build -o wasmbin wasm.go
node main.js
```

## wasm_exec_go

wasm_exec_go は以下コマンドで取得できる

```
cp "$(go env GOROOT)/misc/wasm/wasm_exec.js" wasm_exec_go.js
```

## 参考

- https://github.com/golang/go/wiki/WebAssembly#getting-started
