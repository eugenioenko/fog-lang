export const DemoSourceCode = `

var it = 0

// alternative ternary
var a = if 1 == 1 true else false
print a //true

// initializing array
it = 0
var b = while it++ < 10 use it
print b // [1,2,3..10]

// mapping array
var c = each value in b use value * 3
print c // [3,6,9..30]

// filtering array
var d = each value in c {
    if value % 2 == 0
        use value
}
print d // [6,12,18..24]

// initializing and mapping
it = 0
var e = each value in while it++ < 10 use it use value * 5
print e // [5, 10, 15...50]

// same as previous but with new scope
it = 0
print
    each value in while it++ < 10
    {
        use it
    } {
        use value * 5
    }
// [5, 10, 15...50]

// and if you wondered why is this not a good idea:
print if if 1 == 1 "true" else "false" == "true" "false" else "true"
`;
