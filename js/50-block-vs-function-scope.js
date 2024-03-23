// block scope vs function scope
// {this is the space is block}

// let and const are block scope
// var is function scope

// {
//     let name = "meekail" 
//     // console.log(name)
// }

// // console.log(name)

// function fn(){

//     console.log("mujaahid")
//     function fn2(){
//         var name1 = "meekail"
//         console.log(name1)
//     }
//     fn2()
// }
// fn()


{
    // in this block firstname have a value = meekail
    let firstName = "meekail"
    console.log(firstName)
}

// console.log(firstName)

{
    //and in this block firstname have a value = mujaahid
    let firstName =  "mujaahid"
    console.log(firstName)
}