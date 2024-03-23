// Filter array method

const arr =[1,2,3,4,5,6,7,8,9]

const fn = function(num){
    return num % 2 !== 0
}

const oddInArr =arr.filter(fn)
console.log(oddInArr) 