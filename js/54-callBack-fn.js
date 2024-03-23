// call back function 
// kisi function ke ander function ko call karna 
// ya function ke perameter me kisi function ko pass karne ko 
// call back function kahte hai

function fn2(name){
    console.log("hey my name is",name) //name aik perameter hai jise hamne fn1 me pass kiya hai
    console.log("inside funtion")
}
fn2("mujaahid")
fn2("aslam")



function fn1(a){
    a("meekail ")// a trick call a funtion in another function
    console.log("this is function")
}
// in this perameter callfuntion without perameter 
fn1(fn2)