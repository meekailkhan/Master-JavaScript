// nested destruturing


// this method is array offen object
const persons = [
    {
        name:"meekail",
        age:18,
        class:"twelve",
        gender:"male"
    },
    {
        name:"mujaahid",
        age:24,
        class:"tlve",
        gender:"male"
    },
    {
        name:"aslam",
        age:58,
        class:"twel",
        gender:"male"
    }
]


// array destrturing
// const [name,age,] = persons;
// console.log(age)

// nested detruturing

const [{name,}, ,{age}] = persons

console.log(name)
console.log(age)
