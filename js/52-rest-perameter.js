// rest perameter
// rest perameter work like a spread operetor
function fn(a,b,...c){
    console.log(`a value is`,a)
    console.log(`b value is`,b)
    console.log(`c value is`,c)
}

fn(3,4,5,6,7,8,9)
// ____________________________________________


function addAll(...numbers){
    let total = 0;
    for(let number of numbers){
        total = total+number
    }
    return total
}

const ans = addAll(1,2,3,4,5,)
console.log(ans)