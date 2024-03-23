// prototype in array
const arr = [1,2,3,4,5]
console.log(arr)
console.log(Array.prototype)


function fn(){
    console.log("hey this is function")
}

console.log(fn.prototype)
// how to change data type of prototype
fn.prototype = []
console.log(fn.prototype)
// add element in empty array
fn.prototype.push = ("1")
console.log(fn.prototype)
