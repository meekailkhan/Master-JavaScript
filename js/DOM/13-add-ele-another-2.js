// Element.insertAdjustedHTML("where","HTML")

// beforebegin || this is add element before this content 
// afterbegin  || this is add element before this element
// beforeend   || this is add element after this element 
// afterend    || this is add element after this content

const todoList = document.querySelector(".todo-list")
// console.log(todoList)
todoList.insertAdjacentHTML("beforebegin","<li>teach student</li>")
todoList.insertAdjacentHTML("afterbegin","<li>teach student 1</li>")
todoList.insertAdjacentHTML("beforeend","<li>teach student 2</li>")
todoList.insertAdjacentHTML("afterend","<li>teach student4</li>")

