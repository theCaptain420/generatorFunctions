const fetch = require("node-fetch")


function requestStuff(url) { ///simple request
    return fetch(url).then(respJson => respJson.json()).catch(err => console.log(err));
}

function* getFirstComment() {
    try {

        //gets the story and the comments id(kids of type array)
        var result1 = yield requestStuff("https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty")
        var resID = result1.kids[0];

        //gets the comment text given the 
        var result2 = yield requestStuff("https://hacker-news.firebaseio.com/v0/item/" + resID + ".json?print=pretty")
        var resText = result2.text

        console.log(resText.text)

    } catch (error) {
        console.log(error)
    }
}

let main = getFirstComment()

async function runThroughIt(generator) {
    let stepOne = await generator.next()
    console.log(stepOne)
    let stepTwo = await generator.next()
    console.log(stepTwo)
    let stepThree = await generator.next()
    console.log(stepThree)

}

runThroughIt(main)