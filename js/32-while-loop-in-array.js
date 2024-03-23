// while loop in array 

const fruit =["apple","mango","papaya","mango"]

let one = 0;

const new1 = []

while(one<fruit.length){
    new1.push(fruit[one].toUpperCase())
    one++
}

console.log(new1)