// call back 

function fn(callBack){
   console.log('this is function number 1')
   callBack() 
}
// function fn2(){
//     console.log("this is function number 2")
// }

fn(()=>{
    console.log("this is function number 2")
})
// fn2()

function fn3(number1,number2,callBack){
    console.log(number1,number2)
    callBack(number1,number2)
}

// 

fn3(3,4,(num1,num2)=>{
    console.log(num1+num2)
})