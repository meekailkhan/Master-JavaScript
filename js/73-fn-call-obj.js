// function call,apply,bind

// 1.call


function about(lastName,Class){
    console.log(this.name,this.age,lastName,Class)
}
const obj = {
    name:"meekail",
    age:18,
    
    
}
const obj2 ={
    name:"aslam",
    age:58
}

// about.call(obj,"aslam","12th")



// apply
// apply me hum arrgumment ko hame array bna kar pass karte hai
// about.apply(obj,["aslam","12th"])

// bind
// bindhame aik funtion return karta hai jisko hame console.log()se print karana hota hai
const fn = about.bind(obj,"aslam",'12th')
fn()


