// function object keys


function CreateUser(firstName,lastName,age){

    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    
    
    return this
}
CreateUser.prototype.about = function(){
    return console.log(`user name is ${this.firstName} and user age is ${this.age}`);
};
CreateUser.prototype.is18 = function(){
    return this.age>= 18
};
CreateUser.prototype.hobby = function(){
    return console.log("play football and other game reading quran")
}

const user1 = new CreateUser("mujaahid","aslam",19)
const user2 = new CreateUser("meekail","aslam",17)
const user3 = new CreateUser("aslam","gafur",58)


// user3.about()
// console.log(user3.is18())
// user1.hobby()
// console.log(user3)

for(let key in user1){
    // console.log(key)
    // this is print all key of user1 which is coming to function and prototype
    // how to print only function keys
    if(user1.hasOwnProperty(key)){
        console.log(key)
    }
}