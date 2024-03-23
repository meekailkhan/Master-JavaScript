// lexical scope

const myVar = "meekail";



 function myApp(){
    function myFunc(){
        // const myVar = "mujahid"
        console.log("inside my func",myVar)

    }
    const myFunc2 = function(){}
    const myFunc3 = () => {}
    myFunc()
    console.log(myVar)
}

myApp()