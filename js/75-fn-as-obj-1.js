// function as object

// const user = {
//     firstName:"meekail",
//     lastName:"aslam",
//     age:18,
//     about : function(){
//         console.log(`user name is ${this.firstName} and user age is ${this.age}`)
//     },
//     is18:function(){
//         return this.age>= 18
//     }

// }

function createUser(firstName,lastName,age){
    const userFn = {}
    userFn.firstName = firstName;
    userFn.lastName = lastName;
    userFn.age = age;
    userFn.about = function(){
        return console.log(`user name is ${this.firstName} and user age is ${this.age}`)
    };
    userFn.is18 = function(){
        return this.age>= 18
    }
    return userFn
}

const user1 = createUser("meekail","aslam",12)

console.log(user1.firstName)
const is18 = user1.is18()
console.log(user1.about())


// console.log(about)
console.log(is18)
