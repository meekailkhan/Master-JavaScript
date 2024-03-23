// function expresion || function ko vriable me store karna

// function creat
const intro =   ()=>{
    console.log("hey my name is meekail and my father name is mohmmes aslam ")
}

// callback function
intro()
  

// get value from function
const get =  ()=>{
    return 30+14;
}

// console.log(get())
const functionGet = get();
console.log(functionGet)

// function with perameter 
const plus = (num1,num2)=>{
    return num1 + num2
}

console.log(plus(40,30));



// get boolean value with function
// jab arrow function me aik hi perameter ho to hum pernthises() ko hata sakte hai
// ye method jab function me aik se jada perameter ho to error throw karta hai 
const hundred =  number=>{
    return number * 34 % 2 === 0;
}
console.log(hundred(3.6))


// one line function in arrow function 
const firstChar = string=> string[0];

const indexOfStart = firstChar("meekail")
console.log(indexOfStart)


const target =  (array,target)=>{
    for(let i = 0;i<array.length;i++){
        if(array[i]=== target){
            return i;
        }
    }
    return -1;
}

const myArray = [1,3,6,4,87]
const ans = target(myArray,4)
console.log(ans)