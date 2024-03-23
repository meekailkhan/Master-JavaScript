// innerHTML

const get = document.querySelector(".Manage")
console.log (get.innerHTML)

get.innerHTML = "<h1>this is new</h1>"
get.innerHTML += "<h2>this is again new</h2>"
console.log (get.innerHTML)
