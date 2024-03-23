// this keyword in javascript event

const btn = document.querySelector(".btn-headline")
// console.log(btn)
function fn(){
    console.log("hey you clicked on me")
    console.log("value of this ",this)
}
// anonymus function me this keyword use element ko reflect karta hai
// arrow function me this keyword window object ko reflect karta hai

btn.addEventListener("click",/*fn*/()=>{
    console.log("hey you clicked on me")
    console.log("value of this ",this)
    
})