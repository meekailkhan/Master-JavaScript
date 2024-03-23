// for of loop in array 
// for of loop items ko print karta hai

const names = ["meekail","aslam","mujaahid","fayyaz"]
const fruit2 = []


for(let name of names){
    fruit2.push(name.toLocaleUpperCase())
}

console.log(fruit2)