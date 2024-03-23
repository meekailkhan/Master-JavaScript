// break keyword 

// continue keyword 


// break keyword jaha per hmari if condtion right ho jati hai vahi hmari for loop statment ki printing ko rok deta hai

for(let one = 1;one<=10;one++){
    if(one === 5){
        break;
    }
    console.log(one)
}

console.log("--------")

for(let two = 1;two<=10;two++){
    if(two === 7){
        continue;
    }
    console.log(two)
    // continue keywork condition rigth hone per use statment ko chode kar age printing karta hai
}

console.log("------------------------------------")
// how to break with contiue keyword 

for(let three = 1;three<=12;three++){
    if(three>5){
        continue;
    }
    console.log(three)
}