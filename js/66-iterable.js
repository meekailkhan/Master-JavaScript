// iterable
// jis per hum for of loop laga sakein
// string and array iterable hai in per hum for of loop lga sakte hai 


// string
const name = "mujaahid"
for(let character of name){
    console.log(character)
}


// array
const arr = ["meekail","mujaahid","aslam"]
for(let item of arr){
    console.log(item)
}

// object 
// const obj = {"key1":"value1","key2":"value2","key3":"value3"}
// for(let ele of obj){
//     console.log(ele)
// };
// error show in console because object is not iterable

// _________________________________________________________________________________________________________________________________________

// array like object
// jiske pass length property hoti hai 
// aur jisko hum index se access kar sakte hai
// expamle :-- string

const string = "meekail"
console.log(string.length)
console.log(string[3])
