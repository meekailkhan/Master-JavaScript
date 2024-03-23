// array push & pop
// array shift and unshift

let fruit = ["mango","apple","papaya"]

console.log(fruit)

// how to add new value in fruit variable with push
// push can add new value at last 

fruit.push("banana")
console.log(fruit)

// how to remove value into array with pop

let popfruit =fruit.pop()
// pop variable ke last me se value ko htata hai aur apne ander store kar leta hai
console.log(fruit)
console.log(popfruit)

let animal = ["dog","cat","camel"]
console.log(animal)

// how to add value in start array
animal.unshift("snake")
animal.unshift("goat")


console.log(animal)

// how to remove value at start in array

let removedanimal = animal.shift()
console.log(animal)
 
 console.log(animal.shift())