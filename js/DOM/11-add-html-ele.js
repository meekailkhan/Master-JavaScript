// add element  with innerHTML


const todoList = document.querySelector(".todo-list")
console.log(todoList.innerHTML)
todoList.innerHTML += "<li>this is new todo</li>"
todoList.innerHTML += "<li>this is again new</li>"
console.log(todoList.innerHTML)

// hume element add karne ke liye innerHTML use nhi karna chaiye kyu ki ye peoperty puri innerHTML ko read karke run karta hai jisese perfomance kharab hoti hai
