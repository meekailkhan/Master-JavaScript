// setTimeOut in promise

function myPromie(){
    return new Promise((resolve,reject)=>{
        const value = true;
        setTimeout(()=>{
            if(value){
                resolve()
            }else{
                reject()
            }
        },3000)
    })
}

myPromie()
.then(()=>{console.log("resolved")})
.catch(()=>{console.log("rejected")})

