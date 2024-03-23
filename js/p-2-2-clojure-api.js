function fn(){
    let callNumber = 0;
    return function fn2(){
        if(callNumber < 1){
            console.log("Hi you call me");
            callNumber++;
        }else{
            console.log("me already call ho chuka hoon")
        }
    }
}

const myFn = fn()
myFn()
myFn()

const myFn2 = fn()
myFn2()
