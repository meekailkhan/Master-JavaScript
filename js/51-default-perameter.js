// default perameter

function fn(a,b){
    if(typeof b=== typeof a){
        b= a+b
    }
    return a + b
}
console.log(fn(5,5))

// __________________________________

function fn2(a,b=2){
    return a + b
}
console.log(fn2(5,6))