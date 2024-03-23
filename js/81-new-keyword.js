// new keyword in javascript
function createUser(firstName,age){
    this.firstName = firstName;
    this.age = age
}
createUser.prototype.about = function(){
    return `user name is ${this.firstName} and use age is ${this.age} `
}
const user1 = new createUser("meekail",18)
// jab hum new keyword ko use karke hai to new keyword function ko object bana deta hai aur use function ke proto me uska hi prototype set kar deta hai
console.log(user1.about())