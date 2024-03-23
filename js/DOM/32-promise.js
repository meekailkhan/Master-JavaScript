// promise
const buket = ["coffe","sugar","salt","rice","chilli","oil"]

const pro = new Promise((resolve,reject)=>{
    if(buket.includes("salht")&& buket.includes("oil")&& buket.includes("rice")){
        resolve("we can make rice")
    }else{
        reject("we can not make rice")
    }
})


pro.then((weCan)=>{
    console.log(weCan)
},(weCant)=>{
    console.log(weCant)
})
