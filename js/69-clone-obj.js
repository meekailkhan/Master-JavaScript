// clone object with use Object.assign

const obj = {
    name:"meekail",
    age:18
}
const cloneObj = {...obj}; // clone with spread opretor
// clone with (Object.assign)
const person = Object.assign({},obj)

obj.addres="house no. 1234"

console.log(person)
console.log(obj)
console.log(cloneObj)