// array every method

const arr = [1,4,5,7,9]

const ans = arr.every((all)=>{
    return all % 2  !== 0
})

// console.log(ans) 

const products = [
    {productId:1,productName:"p1",price:20000},
    {productId:2,productName:"p2",price:14000},
    {productId:3,productName:"p3",price:90000},
    {productId:4,productName:"p4",price:17000},
]

const underAmount = products.every((product)=>{
    return product.price<30000
})

console.log(underAmount)