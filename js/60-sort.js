// sort method

const arr=[234,767689,665,0,9]
arr.sort()
console.log(arr)

const name= ["meekail","mujahid","aslam","eekail","imran","Z"]
name.sort()
console.log(name)

const arr2 = [644,73,3455,86,879,452,38,10000]

// input is => 644,73,86,3455,86,879.452,38,10000
// output =>38,73,86,452,644,879,3455,10000  (expected)

// how to get expected output 

// sort as ending order
// arr2.sort((a,b)=>{
//     return a-b
// })
console.log(arr2)

// sort as desending order
arr2.sort((x,y)=>{
    return y-x
})
console.log(arr2)


const prouduct = [
    {prouductId:1,prouductName:"p1",price:4000},
    {prouductId:2,prouductName:"p2",price:600},
    {prouductId:3,prouductName:"p3",price:2000},
    {prouductId:4,prouductName:"p4",price:800},
    {prouductId:5,prouductName:"p5",price:9000}
]


// lowToHigh
const lowTowHigh = prouduct.slice(0).sort((a,b)=>{
    return a.price-b.price
})

console.log(lowTowHigh)

// highToLow
const highToLow = prouduct.slice(0).sort((a,b)=>{
    return b.price-a.price
})

console.log(highToLow)