// class keyword in javascript
// this is combined function and his prototype

class CreateUser{

    // this is a work of function || this cunstroctor 
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;

        return this
    }

    // and this is work of prototype
    about(){
        return console.log(`user name is ${this.firstName} and user age is ${this.age}`);    
    }
    is18(){
        return this.age>= 18 
    }
    hobby(){
        return console.log("play football and other game reading quran")
    }

}


// function CreateUser(firstName,lastName,age){

//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;

//     return this
// }
// CreateUser.prototype.about = function(){
//     return console.log(`user name is ${this.firstName} and user age is ${this.age}`);
// };
// CreateUser.prototype.is18 = function(){
//     return this.age>= 18
// };
// CreateUser.prototype.hobby = function(){
//     return console.log("play football and other game reading quran")
// }

const user1 = new CreateUser("mujaahid","aslam",19)
const user2 = new CreateUser("meekail","aslam",17)
const user3 = new CreateUser("aslam","gafur",58)


user3.about()
console.log(user3.is18())
user1.hobby()
console.log(user3)