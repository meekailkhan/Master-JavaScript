// getters in javascript
// getter se hum method ko propertie ki tarha treat kar sakte hai

class Person{
    // function work || properies
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // prototype work || methods
    // getter
    get fullName(){
        return ` ${this.firstName} ${this.lastName}`
    }
}
const person1 = new Person("meekail","aslam",18)


console.log(person1.fullName)