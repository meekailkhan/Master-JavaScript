// spread operator

// spread operator in array
// const one = [1,2,3];
// const two = [4,5,6];

// const three =[...one,two];

// console.log(three)

// const four = [..."abcdefghij"];
// console.log(four)


// spread operator in object

const obj1 = {
    key1:"value1",
    key2:"value2"
}

const obj2 = {
    key3:"value3",
    key4:"value4",
    key1:"new value"//overwrite of key1
}

const obj3 = {...obj1,...obj2};
console.log(obj3)


let one = {..."12345678"}
console.log(one);

let two = {...["item1","item2","item3"]}
console.log(two)