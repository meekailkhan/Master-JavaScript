// get element by class name || this is provide HTMLcollection 
// qureySelectorAll || this is provide NodeList

const get = document.getElementsByClassName("meekail")
console.log(get[1]) // this is provide HTMLcollection

const get2 = document.querySelectorAll(".meekail")
console.log(get2[2]) // this is provide nodeList
console.log(Array.isArray(get2))
console.log(Array.isArray(get))
