package main

var buf [1024]byte

//export stringFromJS
func stringFromJS(message string) int {
	return len(message)
}

//export getBuffer
func getBuffer() *byte {
	return &buf[0]
}

func main() {}
