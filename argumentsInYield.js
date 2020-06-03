console.log("tsm")

function* logGenerator(){
    console.log(0)
    console.log(1, yield+"skrrt")//still only prints what is said in yield, and not skrrt
    console.log(2, yield)
    console.log(3, yield)
}

var gen = logGenerator()

gen.next("tsm") //only prints 0, cuz the yield isnt implemented
gen.next('tsm')
gen.next('lol')
gen.next('yikes')
