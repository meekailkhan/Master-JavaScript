// if else if 

// let temprature = 15;

// if(temprature<0){
//     console.log("Harmfull weather out side")
// }else if(temprature<10){
//     console.log("very cold out side")
// }else if(temprature<20){
//     console.log("you can turn on fan")
// }else if(temprature<30){
//     console.log("let's go to swim")
// }else if(temprature<40){
//     console.log("you can turn on airconditioner")
// }else{
//     console.log("too hot weather out side")
// }


let temprature = 2;

if(temprature>40){
    console.log("too hot weather out side")
}else if(temprature>30){
    console.log("you can turn on ac")
}else if(temprature>20){
    console.log("let's go to swim")
}else if(temprature>10){
    console.log("you can turn on fan")
}else if(temprature>0){
    console.log("very cold weather out side")
}else{
    console.log("harmfull weather outside")
}



let mobile = +prompt("write someone phone number")

if(mobile === 8696935387){
    document.write("Ammi")
}else if(mobile === 9983937982){
    document.write("meekail")
}else if(mobile === 9636936385){
    document.write("Abba")
}else if(mobile === 7374812144){
    document.write("muzaahid")
}else if(mobile === 7073153158){
    document.write("suwaliya")
}else if(mobile === 8003557850){
    document.write("sharik")
}else if(mobile === 7878219340){
    document.write("feazan")
}else if(mobile === 9636443842){
    document.write("mujaahid dost")
}else if(mobile === 7877071667){
    document.write("fayyaz-ur rehman")
}else{
    if(mobile<6299999999){
        document.write("invalide number")
    }else if(mobile>9999999999){
        document.write("invalide number")
    }else{
        document.write("unknown number")
    }
}
