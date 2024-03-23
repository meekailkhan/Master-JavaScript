// keypress event
// mouseover event 
// mouseleave event

const body = document.body
// console.log(body)



// keypress event
body.addEventListener('keypress',(eventInfo)=>{
    console.log(eventInfo.key)
})

const button = document.querySelector(".btn-headline")
// console.log(button)

// mouseover event
button.addEventListener("mouseover",()=>{
    console.log("mouse over event fired")
})


// mouseleave event 
button.addEventListener("mouseleave",()=>{
    console.log('mouse leave event fired')
})