// little practice with click event


const allButton = document.querySelectorAll(".my-buttons button")
// console.log(allButton)

allButton.forEach((button)=>{
    button.addEventListener("click",(eventInfo)=>{
        eventInfo.currentTarget.style.backgroundColor = "yellow"
        eventInfo.currentTarget.style.color = "gray"
        eventInfo.currentTarget.style.border = "solid 4px green"
        eventInfo.currentTarget.style.fontFamily = "bold"
        console.log(eventInfo)

    })
})
