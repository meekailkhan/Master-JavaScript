// object destruturing

const person = {
    name:"meekail",
    age:18,
    class:"twelve",
    anotherStudie:"coding"
}

let {name ,age,...spRead}= person;

console.log(name);
console.log(spRead)
