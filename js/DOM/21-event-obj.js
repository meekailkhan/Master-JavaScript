// event object

// jab bhi hum kisi element per event listner add kart hai to 
// browser hame do chije deta hai 
// javascript Engine + WepApi,s

const allButton = document.querySelectorAll(".my-buttons button")
console.log(allButton)

for(let buttons of allButton){
    buttons.addEventListener("click",function(eventInfo){
        // console.log(this.textContent)
        // browser hum perfome hone wale event ki information deta hai
        // jo information perameter me browser khud pass karta hai
        console.log(eventInfo.currentTarget)
        console.log(eventInfo.target)
        console.log(eventInfo)
    })
}