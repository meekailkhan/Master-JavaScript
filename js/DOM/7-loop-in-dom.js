// loop
// apply loop htmlCollection and nodeList
// let get = document.getElementsByTagName("a")
// console.log(get.length)

// we can use simple for loop and for of loop

// simple for loop
// for(let i =0;i<get.length;i++){
//     // console.log(get[i])
//     const newItem = get[i]
//     newItem.style.backgroundColor ="#fff"
//     newItem.style.color = "red"

// }

// for of loop
// for(let gets of get){
//     gets.style.color ="green"
//     gets.style.backgroundColor ="whitesmoke"
//     gets.style.fontWeight = "bold"
// }

// we can,t apply forEach method on htmlCollection but after change it into array
// change htmlCollection into array
// get = Array.from(get)
// console.log(Array.isArray(get))

// get.forEach((print)=>{
//     print.style.color ="red"
//     print.style.backgroundColor ="whitesmoke"

// })




// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// Node list 

const get = document.querySelectorAll("a")
console.log(get.length)

// we can apply for loop , for of loop ,and for each method on nodelist

// ----------------------------------------------
// apply simple for loop on nodeList
// for(let i=0;i<get.length;i++){
//     const print = get[i]
//     print.style.color = "red" 
//     print.style.backgroundColor ="white"
// }

// ---------------------------------------------------

// apply for of loop on nodeList
// for(let print of get){
//     print.style.color ="green "
//     print.style.backgroundColor ="white"
//     print.style.fontWeight = "bold"
// }

// we can easyly apply for each method on nodeList

get.forEach((eachItem)=>{
    eachItem.style.color ="green"
    eachItem.style.backgroundColor ="whitesmoke"
    eachItem.style.fontWeight="bold"
})

