// what is clone array 
// array ko clone karne per push and any array method us array per nhi lge jise hamne clone kiya hai 

let array1 = ["item1","item2"];


// simple clone 
// let array2 = ["item1","item2"]


// clone with slice
// let array2 = array1.slice(0)

// clone with concat  ||  concat means jodna
// let array2 = [].concat(array1)


// clone with spread 
// let array2 = [...array1]

// how to add element in clone array 


// add with slice
// let array2 = array1.slice(0).concat(["item3","item4"])


// add with concat  ||  concat means jodna
// let array2 = [].concat(array1,"item3",'item4')


// add with spread 
let one =["item3","item4"]

let array2 = [...array1,...one  ]



array1.push("item3")
console.log (array1===array2)
console.log(array1)
console.log(array2)
