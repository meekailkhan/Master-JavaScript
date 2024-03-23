// create object in function protoype
// function as object part II

// const userMethod = {
//     about : function(){
//         // ager return ke sath console.log()kiya hua hai to function ko sirf call karte hai
//         return console.log(`user name is ${this.firstName} and user age is ${this.age}`)
//     },
//     is18 : function(){
//         // ager return ke sath console.log()nhi kiya hai to function call time per console.log()karna hota hai
//         return this.age>= 18
//     },
//     hobby : function(){
//         return console.log("play football and other game reading quran")
//     }
    


// }


function createUser(firstName,lastName,age){
    const userFn = Object.create(createUser.prototype)
    userFn.firstName = firstName;
    userFn.lastName = lastName;
    userFn.age = age;

    
    
    return userFn
}
createUser.prototype.about = function(){
    return console.log(`user name is ${this.firstName} and user age is ${this.age}`)
};
createUser.prototype.is18 = function(){
    return this.age>= 18
};
createUser.prototype.hobby = function(){
    return console.log("play football and other game reading quran")
}

const user1 = createUser("mujaahid","aslam",19)
const user2 = createUser("meekail","aslam",17)
const user3 = createUser("aslam","gafur",58)


user3.about()
console.log(user3.is18())
user1.hobby()
console.log(user3)



