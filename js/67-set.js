// set(only iterable in this )
// set also have its own method 
// set dont have index
// order ki gurantee nhi hai 
// unique items only (no duplicate allowed)

const arr = new Set()
const newarr = ["meekail","mujaahid","aslam"]
// const arr2 = [6,7,8,9]
arr.add(4)
arr.add(3)
arr.add(5)
arr.add(6)
arr.add(newarr)
arr.add(newarr)
arr.add("meekail")
arr.add(["meekail","mujaahid","aslam"])
arr.add(["aslam","mujaahid","meekail"])

// if(arr.has("meekail")){
//     console.log("this is present")
// }else{
//     console.log("this is not present")
// }


for(let item of arr){
    console.log(item)
}


console.log(arr)