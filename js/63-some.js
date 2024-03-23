// array some method

const arr = [1,3,5,7,8,9]

const ans = arr.some((number)=>number%2===0)
console.log(ans)




const userCart = [
    {productId:1,productName:"mobile",price:20000},
    {productId:2,productName:"leptop",price:14000},
    {productId:3,productName:"tv",price:9000},
    {productId:4,productName:"macbook",price:250000},

]
// is method me aik condition bhi true hone per console me true output dega 
const ans2 = userCart.some((above)=>above.price>100000)
console.log(ans2)