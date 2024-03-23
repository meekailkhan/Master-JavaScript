// function expresion || function ko vriable me store karna

// function creat
const intro =  function (){
    console.log("hey my name is meekail and my father name is mohmmes aslam ")
}

// callback function
intro()
  

// get value from function
const get = function (){
    return 30+14;
}

// console.log(get())
const functionGet = get();
console.log(functionGet)

// function with perameter 
const plus =function (num1,num2){
    return num1 + num2
}

console.log(plus(40,30));



// get boolean value with function

const hundred = function (number){
    return number * 34 % 2 === 0;
}
console.log(hundred(3.6))



const firstChar =function (string){
    return string[0];
}
const indexOfStart = firstChar("meekail")
console.log(indexOfStart)


const target = function (array,target){
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