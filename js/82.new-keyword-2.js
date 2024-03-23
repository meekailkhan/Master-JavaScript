// use new keyword in function as a object


// jo function humare liye kuch create karte hai use construccter function bolte hai expample ==> CreateUser funtion object create kar rha hai
// constructor function
// jub hum koi esa function banate hai jo in futcher new keyword ke sath hi call hoga to hum us funtion ka name capital leter ke sath start kartew hai
// new keyword ==> set auto prototype 
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


user3.about()
console.log(user3.is18())
user1.hobby()
console.log(user3)