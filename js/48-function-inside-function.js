// function inside function

// inside function ko run karne ke liye pehle main function ko run karna hota hai
const app = ()=>{
    const fn = ()=> {
        console.log("hello from fn")
    }
    // return value function ko console.log karke use me lete hai
    const twoPlus = (num1,num2)=>{
        return num1 + num2
    }
    const mul = (num1,num2)=> num1*num2

    console.log("this is inside function")
    fn()
    console.log(twoPlus(6,4))
    console.log(mul(2,10))
}

 app()