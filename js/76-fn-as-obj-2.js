// function as object part II

const userMethod = {
    about : function(){
        // ager return ke sath console.log()kiya hua hai to function ko sirf call karte hai
        return console.log(`user name is ${this.firstName} and user age is ${this.age}`)
    },
    is18 : function(){
        // ager return ke sath console.log()nhi kiya hai to function call time per console.log()karna hota hai
        return this.age>= 18
    }

}


function createUser(firstName,lastName,age){
    const userFn = {}
    userFn.firstName = firstName;
    userFn.lastName = lastName;
    userFn.age = age;
    userFn.about = userMethod.about;
    userFn.is18 = userMethod.is18
    
    
    return userFn
}

const user1 = createUser("mujaahid","aslam",19)

user1.about()
console.log(user1.is18())


