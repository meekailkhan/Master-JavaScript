// array find method 

const arr =["doggy","cat","gaot","cow"]

const ans = arr.find((String)=>{
    return String.length === 3
})

console.log(ans)

const user= [
    {userId:1,userName:"meekail"},
    {userId:2,userName:"mujaahid"},
    {userId:3,userName:"aslam"},
    {userId:4,userName:"feazan"},
    {userId:5,userName:"imran"}
]

const myUser = user.find((user)=>{
    return user.userId === 4
})
console.log(myUser)