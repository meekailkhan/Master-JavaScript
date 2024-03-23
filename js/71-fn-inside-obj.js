// method 
// jo function object ke ander difined hote hai unhe method kehte hai

// function in side object 
const user = {
    name  :"mujaahid",
    age:24,
    about: function(){
        console.log(`user name is ${user.name} and user age is ${user.age}`)
    },
    total:function(){
        console.log(user)
    }

}
user.total()

user.about()


// this ka matlab jise object ke ander difined karte hai us object ke name se hota hai
const person = {
    name:"meekail",
    age:18,
    about: function(){
        console.log(`person name is ${this.name} and person age is ${this.age}`)
    }
}
person.about()


function fn(){
    console.log(`person name is ${this.name} and person age is ${this.age}`)
}

const obj1 = {
    name:"meekail",
    age:18,
    about:fn
}

const obj2 = {
    name:"mujaahid",
    age:24,
    about:fn
}

const obj3 = {
    name:"aslam",
    age:58,
    about:fn
}

const obj4 = {
    name:"rashid",
    age:62,
    about:fn
}


obj1.about()
obj2.about()
obj3.about()
obj4.about()