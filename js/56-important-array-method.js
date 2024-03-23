// important array methods

// 1.forEach
// 2.map
// 3.filter
// 4.reduce

const arr =[7,5,9,6,8,4]

function fn(number,index){
    console.log(`index is ${index}`)
    console.log(`${number}*2 = ${number*2}`)
}

// fn(arr[0],0)
// fn(arr[1],1) 

// for(let i=0;i<arr.length;i++){
//     fn(arr[i],i)
// }

// arr.forEach(fn)

arr.forEach(function(info,index){
    console.log(info,index)
    
})