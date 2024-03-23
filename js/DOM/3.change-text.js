// change text
// textContent and innerText

// how to change text with js
const changeText = document.querySelector(".Manage") // abcd
// innerText only display per show word ko hi print karta hai
// textContent hide and show display dono ko print karta hai
console.log(changeText.innerText)
changeText.textContent += "efgh" //abcdefgh
console.log(changeText.textContent)

let obj = {
    name:"meekail"
}

console.log(obj.name) // meekail
