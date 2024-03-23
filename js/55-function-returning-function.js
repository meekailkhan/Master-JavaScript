// function returning function

function fn(){
    function fn2(){
        return "this is inside function"
    }
    return fn2
}

const ans = fn()
console.log(ans())