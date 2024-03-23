// promise.resolve
// promise chaining

function myPromies(){
    return new Promise((resolve,reject)=>{
        resolve("mee")
    })
}

myPromies().then((value)=>{
    console.log(value)
    value += "ka"
    return value
})
.then((value)=>{
    console.log(value)
    value += "il"
    return value;
})
.then((value)=>{
    console.log(value)
})
