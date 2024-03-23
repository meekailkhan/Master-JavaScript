// promise in function

function myPromise(){
    const buket = ["coffe","sugar","salt","rice","chilli","oil"]
    return new Promise((resolve,reject)=>{
        if(buket.includes("salht")&& buket.includes("oil")&& buket.includes("rice")){
            resolve("we can make rice")
        }else{
            reject("we can not make rice")
        }
    })
}

myPromise().then((weCan)=>{
    console.log(weCan)
},(weCant)=>{
    console.log(weCant)
})
