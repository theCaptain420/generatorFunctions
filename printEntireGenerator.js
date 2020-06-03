console.log("tsm")

function* countAppleSales () {
    let saleList = [3, 7, 5]
    for (let i = 0; i < saleList.length; i++) {
      yield saleList[i]
    }
  }
  

function runThroughYield(generator){
    let done = false;

    while(done===false){
        let genVal= generator.next();
        if(genVal.done===true){
            done=true;
        }else{
            console.log(genVal)
        }
    }
}

runThroughYield(countAppleSales())