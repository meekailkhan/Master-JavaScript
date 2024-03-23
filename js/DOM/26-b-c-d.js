// bubbling
// cpaturing
// delegation


const body = document.body
const gandParent = document.querySelector(".grandparent")
// console.log(gandParent)
const parent = document.querySelector(".parent")
// console.log(parent)
const child = document.querySelector(".child")
// console.log(child)





// // bubbling event
// child.addEventListener("click",()=>{
//     console.log("hey you clicked on child !!!")
// })

// parent.addEventListener("click",()=>{
//     console.log("hey you clicked on parent !!!")
// })//when we click on child so automatically click on parent becuse child is part of parent 

// gandParent.addEventListener("click",()=>{
//     console.log("hey you clicked on GrandeParent !!!")
// })//when we click on child or parent so automatically click on grandparent becuse parent and child part of grandparent


// body.addEventListener("click",()=>{
//     console.log("hey you clicked on body !!!")
// })

// // capturing event
// child.addEventListener('click',()=>{
//     console.log("hey this is child capturing")
// },true)
// parent.addEventListener("click",()=>{
//     console.log("hey this is parent capturing")
// },true)
// gandParent.addEventListener("click",()=>{
//     console.log("hey this is grandparent capturing")
// },true)
// body.addEventListener("click",()=>{
//     console.log("hey this is body capturing")
// },true)


// event delegation

gandParent.addEventListener("click",(eventInfo)=>{
    // console.log(eventInfo.target.textContent)
    console.log(eventInfo.target)
    // eventInfo.target.textContent = "this is new content"
    // eventInfo.target.style.backgroundColor = "red"
    // eventInfo.target.style.color = "gray"




    
})