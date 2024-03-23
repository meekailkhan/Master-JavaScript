// setters in javascript

class Person{
    // function work || properies
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // prototype work || methods
    fullName(){
        return ` ${this.firstName} ${this.lastName}`
    }
    setName(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName
    }
}
const person1 = new Person("meekail","aslam",18)


console.log(person1.fullName())
console.log(person1.firstName)
console.log(person1.lastName)
person1.setName("mujaahid","aslam")
console.log(person1.firstName)
console.log(person1.fullName())
