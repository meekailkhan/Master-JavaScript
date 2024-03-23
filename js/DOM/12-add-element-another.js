// how to add element with another way
// document.createElement()
// append
// prepend
// remove

// const newTodo = document.createElement("li")
// console.log(newTodo)
// newTodo.textContent = " teach student"
// // const addTodo = document.createTextNode("this is new todo1")
// const todoList = document.querySelector(".todo-list ")
// const todoListLi = document.querySelector(".todo-list li")
// // console.log(todoListLi)
// console.log(todoList)
// newTodo.appendChild(addTodo)
// todoList.prepend(newTodo) //this is add element before original element
// todoList.append(newTodo)//this is add element after orginal element
// // todoListLi.remove() //this is remove element who make in html file
// // console.log(newTodo)


// before 
// after 

const todoList = document.querySelector(".todo-list ")

const todo = document.createElement("li")
todo.textContent = "new Teach           "
const newTodo = document.createElement("li")
console.log(newTodo)
newTodo.textContent = " teach student"

todoList.before(newTodo)//this is add element before this content
todoList.after(todo)//this is add element after this content

