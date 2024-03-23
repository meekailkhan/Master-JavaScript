// event fired on diffrent element

const allButton = document.querySelectorAll(".my-buttons button")
console.log(allButton)
// button.addEventListener("click",function(){
//     console.log("hey you click me")
// })


// for of loop
// for(let button of allButton){
//     // console.log(button)
//     button.addEventListener("click",function(){
//         console.log(this.textContent)
//     })
// }


// simple for loop 
// for(let i = 0; i < allButton.length; i++){
//     allButton[i].addEventListener("click",function(){
//         console.log(this.textContent)
//     })
// }


// for each

allButton.forEach(function(pera){
    pera.addEventListener("click",function(){
        console.log(this.textContent)
    })
})