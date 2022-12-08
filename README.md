## Go の Wasm を Node.js から呼び出すテスト

解説記事:  
その 1  
https://kajindowsxp.com/go-tinygo-webassembly/

その 2  
https://kajindowsxp.com/go-tinygo-webassembly-string/

Go 言語を WebAssembly にコンパイルし、Node.js から呼び出すサンプルコード。

純正の Go では main 関数の呼び出しができる。  
TinyGo ではそれに加えて、Go 内で定義した関数や定数を export でき、Node.js から参照できる。
