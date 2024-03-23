// syncronas vs asyncronas
// setTimeout
// clearTimeout


console.log("script start")

const id = setTimeout(()=>{
    console.log("this content is in the setTimeOut")
},24)
// set time out hame aik id deta hai 
console.log(id ) //now setTimeOut  is 1

for(let i = 0;i<2000;i++){
    console.log("this is for loop")
}
 clearTimeout(id)//we can stop printing of set time out with clearTimeOut when this argument is id of setTimeOut

console.log("script end")
