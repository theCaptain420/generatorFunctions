console.log("tsm")

function* anotherGenerator(i){
    yield i+1
    yield i+2
    yield i+3
}

function addTen(i){
    return i+10;
}

function* generator(i){
    yield i;
    //adding a * yields through another generator functions
    //without the * it doesnt run it, and just returns a object of the function.
    yield* anotherGenerator(i); 
    //function on yield
    yield addTen(i)
    yield i+11
    yield i+12
}

var gen = generator(10)

console.log(gen.next().value)//10
//---runs through the entire generator function, before continueing on next yield
console.log(gen.next().value)//11
console.log(gen.next().value)//12
console.log(gen.next().value)//13
//---till here
console.log(gen.next().value)//20
console.log(gen.next().value)//21
//runs through the next yield, so with value it shouldve printed 22, now it prints false, cuz its not done
console.log(gen.next().done)
console.log(gen.next().value)//undefined
console.log(gen.next().done)//true cuz its done