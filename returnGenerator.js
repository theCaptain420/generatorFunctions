console.log("tsm")

function* yieldAndReturn(){
    yield 'Y';
    return 'R';
    yield 'Unreachable';
}

var gen = yieldAndReturn()
console.log(gen.next()); // { value: "Y", done: false }
console.log(gen.next()); // { value: "R", done: true }
//after return it stop as expected
console.log(gen.next()); // { value: undefined, done: true }