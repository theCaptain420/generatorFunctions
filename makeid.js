console.log("tsm")

function* idMaker(){
    var index = 0;
    //while(true) does do infinite loop(crash) since it waits for next yield to run
    while(true){
        yield index++;
    }
}

//these two doesnt increase index value, cuz it generates a new function every time.
//(which means it doesnt run yield on the same function/value)
console.log(idMaker().next().value)
console.log(idMaker().next().value)

//creating one combined function, ensures that it yields on the same value/function
const makeIDs = idMaker();

console.log(makeIDs.next().value)//0
console.log(makeIDs.next().value)//1
console.log(makeIDs.next().value)//2
console.log(makeIDs.next().value)//3
