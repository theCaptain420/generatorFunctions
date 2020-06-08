const fetch = require("node-fetch")

async function requestStuff(url) { ///simple request
    const res = await fetch(url)
        .then(respJson => respJson.json())
        .catch(err => console.log(err));

    return res;

}

async function* getFirstComment() {
    try {

        //gets the story and the comments id(kids of type array)
        var result1 = await requestStuff("https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty");

        //gotta yield the result.
        //when running .next(), it runs the code down to the "yield" youre running
        yield result1;


        //gets the comment-text given the comment-id
        var resID = result1.kids[0];
        var result2 = await requestStuff("https://hacker-news.firebaseio.com/v0/item/" + resID + ".json?print=pretty")
        var resText = result2.text

        yield resText;

    } catch (error) {
        console.log(error)
    }
}
async function runThroughIt(generator) {
    //prints the value from the first fetch.
    let stepOne = await generator.next();//awaits till its done, without it, it returns a promise.
    console.log("res from step 1! ", stepOne);

    //prints the value from the 2nd fetch.
    let stepTwo = await generator.next()
    console.log("res from step 2: ", stepTwo);

    //will return undefined/done:true because the function has finished evaluating!
    let stepThree = await generator.next()
    console.log("res from step 3:",stepThree)
}

let main = getFirstComment()

runThroughIt(main)