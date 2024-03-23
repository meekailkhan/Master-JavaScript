// arrow function in object


const obj = {
    name:"meekail",
    age:18,
    about :()=>{
        console.log(this)
        console.log(this.name,this.age)
    }
    
}

// arrow function me this window boject hota hai
obj.about()