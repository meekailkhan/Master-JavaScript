// behid the seen

// console.log("script start !!!")

// const allButton = document.querySelectorAll(".my-buttons button")
// console.log(allButton)

// allButton.forEach((pera)=>{
//    pera.addEventListener("click",(eventInfo)=>{
//        // we can delay with this event witth help of loop
       
//        let num = 0

//        for(let i = 0;i<100000000;i++){
//            num +=i;
//        }
//        console.log(eventInfo.currentTarget.textContent)
//    })
// })

// let outerVar = 0
// for(let i = 0;i<10000000;i++){
//     outerVar += i
// }

// console.log("")
// console.log("script end !!!")

console.log("script start")
const allButton = document.querySelectorAll(".my-buttons button")
// console.log(allButton)

allButton.forEach((button)=>{
    button.addEventListener("click",(eventInfo)=>{
        
        var num = 0;
        for(let i=0;i<1000000000;i++){
            num += i
        }


        console.log(eventInfo.currentTarget.textContent,num)
    })
})

let outVar = 0
for(let i =0;i<1000000000;i++){
    outVar += i
}
console.log("value of outVar is",outVar)
console.log("script end !!!")