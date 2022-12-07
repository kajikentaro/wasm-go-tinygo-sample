package main

import (
	"fmt"
)

type hello interface{}

//export fuga
func hoge(a, b int) int {
	return a + b
}

func main() {
	fmt.Println("Hello World")
}
