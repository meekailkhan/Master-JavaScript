// maps
// map aik iterable hai jis per hum for of loop laga sakte hai

// map me order guarntee hota hai

// isme object ki tarha key value pair hote hai
// duplicate keys not allowed

// obj me hum sirf string aur symbol ko key value pair bana sakte hai jaise ==> string ,array ,number

const obj = new Map()
obj.set("firstName","meekail")
obj.set('age',18)
obj.set(1,"one")
// how to distrucher map
console.log(obj.get("firstName"))
// how to print all keys of map
// console.log(obj.keys())
console.log(obj)


for(let [key, value] of obj){
    console.log(key ,value)
}


// key value pair ko map ke ander hi kese pass kare
// hum iske ander aik array lete hai aur uske ander key value pass karne ke liye aik array aur lete hai
const objMap = new Map([["name","meekail"]])
console.log(objMap)
