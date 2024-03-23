// parameter-destructuring

let person = {
    name:"meekail",
    gender:"male"
}

function fn(obj){
    console.log(obj.name)
    console.log(obj.gender)
}

fn(person)
//___________________________________________________

function fn2({name,gender}){
    console.log(name)
    console.log(gender)
}

fn2(person)

