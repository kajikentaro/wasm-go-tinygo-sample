package main

import (
	"bytes"
	"fmt"
)

var buf [1024]byte

//go:export getBuffer
func getBuffer() *byte {
	return &buf[0]
}

// 文字数を返す
//
//go:export readBuffer
func readBuffer() int {
	strBuf := bytes.Split(buf[:], []byte("\x00"))[0]
	str := string(strBuf)
	return len(str)
}

func main() {
	copy(buf[:], []byte("hoge"))
	str := string(buf[:])
	if buf[0] == 0 {
		fmt.Println("blank")
		return
	}
	fmt.Println(str)
}
