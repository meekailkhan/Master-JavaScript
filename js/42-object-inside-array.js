// objects inside array 

// is array me 3 object array ke 3  element hai

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
        class:"twelve",
        gender:"male"
    },
    {
        name:"aslam",
        age:58,
        class:"twelve",
        gender:"male"
    }
]

// console.log(persons)


for(let person of persons){
    console.log(person)
}

console.log(persons[2])