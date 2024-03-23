// Map array method 

const arr = [3,4,5,6,7]

const fn = (number,index)=>{
    return `index is ${index} , and arr is ${number * number}`
}

const squareOfArr = arr.map(fn);
console.log(squareOfArr)


const arr2 = [9,8,7,6]

const squareOfArr2 = arr2.map(function fn2(num){
    return num * num
})
 
console.log(squareOfArr2)

const arr3 = [
    {firstName:"meekail",age:18},
    {firstName:"mujaahid",age:24},
    {firstName:"feazan",age:16},
    {firstName:"mohmmed",age:19},
    {firstName:"imran",age:17},

]


const newArr = arr3.map(function fn3(Name){
    return Name.firstName
})

console.log(newArr)
