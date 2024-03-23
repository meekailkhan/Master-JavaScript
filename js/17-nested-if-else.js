// most importent thin is prompt 
// prompt browser me se user se input leta hai 

// supose if bakra eid on 21 june
let eid = 21;
let date = +prompt("gusse the date of June Bakra Eid")


// note : promte hames value string rakhta haihame use change karna padta hai
console.log(typeof date ,date)

if(date === eid){
    console.log("this date is right")
}else{
    if(date<eid){
        console.log("this date is too backword")
    }else{
        console.log("this date is too forword")
    }
}

document.write("<h1>this method is very important for me</h1>")