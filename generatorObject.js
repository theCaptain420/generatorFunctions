console.log("tsm")

const someObj={
    *generator(){
        yield 'a',
        yield 'b'
    }
}

const gen = someObj.generator()

console.log(gen.next())
console.log(gen.next())



const anotherObj={
    *printer(){
        yield 'aa',
        yield 'bb'
    }
}

const gene = anotherObj.printer()

console.log(gene.next())
console.log(gene.next())