// opitional chaining

const obj ={
    name:"meekail",
    // address:{houseNumber:"1234"}
}
// undifined ke ander reading hone per syntax error aata hai
// (?) ye operator key object me key na milne per data ko aage read karne se rokta hai
console.log(obj?.address?.houseNumber)
console.log(obj.name)