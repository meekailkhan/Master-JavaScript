// clojure

function fn(power){
    return function(number){
        console.log(number**power)
    }
}

const square = fn(2)
square(7)