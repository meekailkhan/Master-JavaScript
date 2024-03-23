// static method and properties


class Person{
    // function work || properies
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    
    // static propertie
    // hum is propertie ko class ke sath hi exix kar sakte hai ye propertie class ke sath hi call hogi
    static codeOfClass = "this code wrote by javaScript"

    // static method
    static classInfo(){ 
        return "this is person class"
        // hum is method ko class ke sath hi exix kar sakte hai ye class ke sath call nhi hoga 
    
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
console.log(Person.classInfo())
console.log(Person.codeOfClass)