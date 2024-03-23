// some old method for adding element becuse other method is not rum in poor ei

// appendChild
// insertBefore
// replaceChild
// removeChild

const todoList = document.querySelector(".todo-list")
const addElement = document.createElement("li")
addElement.textContent = "teach student"

// todoList.appendChild(addElement)

// insertBefore
// const ulChild = todoList.childNodes[0]
// console.log(ulChild)
// todoList.insertBefore(addElement,ulChild)


// elem.replaceChild(replaceable,removeable)
const LiItem = document.querySelector(".todo-list li")
// todoList.replaceChild(addElement,LiItem)

// removechild
todoList.removeChild(LiItem)
 