// how to change,add and remove classes with js 

const headline = document.querySelector(".headline");
console.log(headline.classList);
headline.classList.add("border");
// headline.classList.remove("headline")
console.log(headline.classList.contains("headline"));


const header = document.querySelector(".header");
console.log(header.classList);
// header.classList.add("header-bg")
header.classList.toggle("header-bg");
// header.classList.toggle("header-bg")
console.log(header.classList.contains("header-bg"));


