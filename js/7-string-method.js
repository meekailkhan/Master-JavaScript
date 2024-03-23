// name of method
// 1.trim()
// 2.toUpperCase()
// 3.toLowerCase()
// 4.slice


let name ="   meekail     "
// let  ko hum trim ke ssath rdiclayr karte hai jis se ki us per trim method apply ho jaaye treim method se lenght me extra space count nhi hote
// note : ye note count space only starting left and ending right se hote hai
name = name.trim()


console.log(name.length);

// toUpperCase
let meekail = "mujaahid"
meekail = meekail.toUpperCase()
console.log(meekail)

// toLowerCase
let one = "ASlam"
one = one.toLowerCase()
console.log(one)

// slice
let two = "muzaahid"
two = two.slice(2,8); 
console.log(two);



console.log(Number.MAX_SAFE_INTEGER)