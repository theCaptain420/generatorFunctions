console.log("tsm")

function* count(number){
    yield number;
    yield number+1;
}

const countingWithOne = count(1)
//1
console.log(countingWithOne.next().value)
//2
console.log(countingWithOne.next().value)
// returns undefined, cuz it runs out of yields
console.log(countingWithOne.next().value)

//every .next goes to next yield.
