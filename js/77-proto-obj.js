// proto for object
// both is same in output (__proto__)([[prototype]])
// proto propertie aik object ko dusre object me se key value read karne ka accesse dati hai
// sirf proto me set kiye gaye object ko hi read kar sakta hai 
"use strict"
const obj = {
    name:"meekail",
    age:18,
};
const arr = ["meekail","aslam","mujaahid"];

// how to creat proto for this object peranthises()ke ander banene wale proto ka name ata hai
// const obj2 = {}
const obj2 = Object.create(obj);
obj2.address = "abcdefgjijklmnopqrstuvwxyz"
// proto of obj2 is obj
console.log(obj2.__proto__);