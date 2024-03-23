// static list vs live list 

// static list || static list is NodeList
// live list || live list is htmlCollection

// document.querySelector() || NodeList
// document.getElementBySometing || htmlCollection

const todoList = document.querySelector(".todo-list")//this is give NodeList jo ki javascript se add kiye gye element ko console me show nhi karta
const todoList2 = todoList.getElementsByTagName("li") //this is give HTMLCollection jo ki javascript se add kiye gye element ko console me show karta hai
console.log(todoList2)
const sixthItem = document.createElement("li")
sixthItem.textContent = "item 6"
const ul = document.querySelector(".todo-list")

ul.append(sixthItem)