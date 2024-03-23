// add todo project


const formTodo = document.querySelector(".form-todo")
const formInput = document.querySelector(".form-todo input[type='text']")
const todoList = document.querySelector(".todo-list")
// console.log(todoList)


// formTodo.addEventListener("submit",(eventInfo)=>{
//     eventInfo.preventDefault()
//     const newTodoText = formInput.value
//     const newLiEle = document.createElement("li")
//     const newLiInnerHtml = `<span class="text">${newTodoText}</span>
//     <div class="todo-buttons">
//         <button class="todo-btn done">Done</button>
//         <button class="todo-btn remove">Remove</button>
//     </div>`
//     newLiEle.innerHTML = newLiInnerHtml
    

//     // console.log("hey")
// })  


formTodo.addEventListener("submit",(eventInfo)=>{
    eventInfo.preventDefault()
    const newTodoText = formInput.value;
    const newLiEle = document.createElement("li")
    const newInnerText =`
    <span class="text"> ${newTodoText}</span>
    <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
    </div>`;
    newLiEle.innerHTML = newInnerText
    todoList.append(newLiEle)
    formInput.value = ""

})

const doneBtn = document.querySelector(".done")
const removeBtn = document.querySelector(".remove")
const span =  document.querySelector("span")

todoList.addEventListener("click",(eventInfo)=>{
    if(eventInfo.target.classList.contains("remove")){
        const targetedLi = eventInfo.target.parentNode.parentNode
        targetedLi.remove()
    }
    if(eventInfo.target.classList.contains("done")){
        // span.style.textDecoration = "line-through"
        // console.log("this is done btn")
        const spanLi = eventInfo.target.parentNode.previousElementSibling
        spanLi.style.textDecoration = "line-through"
    }
})