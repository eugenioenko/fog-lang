export const DemoSourceCode =
`
var a = 0
var b = while a < 10 {
    a += 1
    continue a
}
print b

each c in b {
    print c
}
`
