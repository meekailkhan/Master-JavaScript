// functions prototype
// jab hum function create karte hai to hum hume function ke sath aik empty object milta hai jise prototype kehte hai

function hello(){
    return console.log("this is function")
}


console.log(hello.prototype)
hello.prototype.firstName="meekail";
hello.prototype.age= 18
console.log(hello.prototype.firstName)
console.log(hello.prototype.age)

if(hello.prototype){
    console.log("yes prototype is present")
}else{
    console.log("prototype is not present")
}