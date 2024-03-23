// Array splice method
// (start index number)  , (quntity of delete item)  , (print more insert item)



const arr =["item1","item2","item3","item4"];


// delete
// arr.splice(0,2)

// insert
// arr.splice(2,0,"insert item1","insert item2")


// delete and insert
arr.splice(1,2,"insert item1","insert item2")
console.log(arr)