// object me loop kese chalaye 

// hum obj me sirf for of loop aur for in loop chala skte hai 
// aik method aur hai object.key

const person = {
    name:"meekail",
    age: 18,
    sleeping: "10pm",
    aadat:["football","learning","reading"]
}

for(let one in person){
    console.log(person[one])
    // how to print full input layout
    // console.log(`${one}:${person[one]}`)
    console.log(one,":",person[one])
}


// object.keys hame object ki sabhi key ke name pass karta hai

console.log(Object.keys(person))

console.log(Array.isArray(Object.keys(person)))

for(let two of Object.keys(person)){
    console.log(person[two])
}