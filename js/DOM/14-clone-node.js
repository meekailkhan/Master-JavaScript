// clone nodes

const ul = document.querySelector(".todo-list")
console.log(ul)
const LiItem = document.createElement("li")
LiItem.textContent = "teach student"
// clone nodes ||clone of LiItem
const LiItem2 = LiItem.cloneNode(true) //true is clone there childNodes with there text

ul.append(LiItem)
ul.prepend(LiItem2)//we can append or prepend one time with one time
