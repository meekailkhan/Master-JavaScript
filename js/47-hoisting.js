// hoisting

// call function before declear
hello()
// this case is not run in function expression and arrow function
// becuse in this case function store in variable and we can use variable only after this declear
function hello(){
    console.log("hello world")
}
