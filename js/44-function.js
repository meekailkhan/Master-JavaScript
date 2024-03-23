// // function in javascript

// function meekail(){
//     console.log("hey my name is meekail")
// }

// meekail();

// // functton creat karte samy variable banane ke perametrs kehte hai
// function sumNumber(a,b,c){
//     return a + b + c;
// }
// // function me vlaue dene ko aargument kehte
// console.log(sumNumber(4,5,6))

// function isEven(number){
//     if(number % 2 === 0){
//         return "true"
//     }
//     return "false"
// }

// console.log(isEven(7));

// // function findTarget(array,target){
// //     for(let one = 0;one<array.length;one++ ){
// //         if(array[one]===target){
// //             return one;
// //         }
// //     }
// //     return -1;
// // }

// // const three = [2,5,3,8,6];
// // console.log(findTarget(three,6))
// // console.log(three[4])


// function one(two,three){
//     for(let four = 0;four<two.length;four++){
//         if(two[four]===three){
//             return four;
//         }
        
//     }
//     return -1
// }
// const five = [1,2,3,4,5,6,7];
// console.log(one(five,6))



 
// function creat
function intro(){
    console.log("hey my name is meekail and my father name is mohmmes aslam ")
}

// callback function
intro()
  

// get value from function
function get(){
    return 30+14;
}

// console.log(get())
const functionGet = get();
console.log(functionGet)

// function with perameter 
function plus(num1,num2){
    return num1 + num2
}

console.log(plus(40,30));



// get boolean value with function

function hundred(number){
    return number * 34 % 2 === 0;
}
console.log(hundred(3.6))



function firstChar(string){
    return string[0];
}
const indexOfStart = firstChar("meekail")
console.log(indexOfStart)


function target(array,target){
    for(let i = 0;i<array.length;i++){
        if(array[i]=== target){
            return i;
        }
    }
    return -1;
}

const myArray = [1,3,6,4,87]
const ans = target(myArray,7)
console.log(ans)