// set interval
// setInterval(()=>{
//     console.log(Math.random())
// })

const body = document.body
// console.log(body)
const changeBtn = document.querySelector(".btn")
// console.log(changeBtn)

// function changeColor(){
//     const red = Math.floor(Math.random()*256)
//     const green = Math.floor(Math.random()*256)
//     const blue = Math.floor(Math.random()*256)
//     const change = `rgb(${red},${green},${blue})`
    
//     return body.style.backgroundColor = change

// }


const id = setInterval( ()=>{
        const red = Math.floor(Math.random()*256)
        const green = Math.floor(Math.random()*256)
        const blue = Math.floor(Math.random()*256)
        const change = `rgb(${red},${green},${blue})`
        
        body.style.background = change
    
    },1000)
// console.log(id)


changeBtn.addEventListener("click",()=>{
    clearTimeout(id)
    console.log("stop color changing by btn")
    changeBtn.textContent = body.style.background
})
