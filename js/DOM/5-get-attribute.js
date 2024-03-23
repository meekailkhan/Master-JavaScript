// get and set attribute


const link = document.querySelector("a") 
console.log(link.getAttribute("href").slice (4))



link.setAttribute("href","mujaahid")
console.log(link.getAttribute("href").slice(2))

let name = "Meekail"

link.setAttribute("href",'aslam '+ name)
console.log(link.getAttribute("href").toUpperCase())

// const input = document.querySelector(".form-todo input")
// console.log(input.getAttribute("placeholder"))

// input.setAttribute("placeholder","two .  new Add ToDo")
// console.log(input.getAttribute("placeholder").slice(3))
