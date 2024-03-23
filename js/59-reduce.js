// Reduce array method
// reduce method pure array me se aik value reduce karta hai

const arr =[1,2,3,4,5]

const sumOfarr = arr.reduce((acummulator,currentValue)=>{
    return acummulator + currentValue
})
console.log(sumOfarr)

// acummulator + currentValue = return
//     1       +       2      =  3
//     3       +       3      =  6
//     6       +       4      =  10
//     10      +       5      =  15

const userCart = [
    {productList:1,productName:"mobile",price:8000},
    {productList:2,productName:"laptop",price:40000},
    {productList:3,productName:"frize",price:25000},

]

// const fn2 = (totalAmount,currentAmount)=>{
//     return totalAmount + currentAmount.price
// }

const totalPrice = userCart.reduce((totalAmount,currentAmount)=>{
    return totalAmount + currentAmount.price
},0)

console.log(totalPrice)