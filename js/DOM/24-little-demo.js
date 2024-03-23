const button = document.querySelector("button")
// console.log(button)
const body = document.body
const span = document.querySelector("span")
console.log(span)

function randomColorGenretor(){
    const red = Math.floor(Math.random()*256)
    const green = Math.floor(Math.random()*256)
    const blue = Math.floor(Math.random()*256)
    const randomColor = `rgb(${red},${green},${blue})`
    return randomColor


}
setInterval(randomColorGenretor,1000)
button.addEventListener("click",function(){
    const random = randomColorGenretor()
    body.style.backgroundColor = random
    span.textContent = random
})