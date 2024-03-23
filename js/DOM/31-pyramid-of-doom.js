// call backs , callback hell , pyramid of doom

const heading1 = document.querySelector(".heading1")
const heading2 = document.querySelector(".heading2")
const heading3 = document.querySelector(".heading3")
const heading4 = document.querySelector(".heading4")
const heading5 = document.querySelector(".heading5")
const heading6 = document.querySelector(".heading6")
const heading7 = document.querySelector(".heading7")

// // const newText = heading1.getAttribute("class")
// // console.log(newText)

// // console.log(heading1)


function randomColorGenrator(){
    const red = Math.floor(Math.random()*256)
    const green = Math.floor(Math.random()*256)
    const blue = Math.floor(Math.random()*256)

    const rgb = `rgb(${red},${green},${blue})`
    return rgb

}
randomColorGenrator()

// function changeText(){
//     for(let i = 1;i<8;i++){
//         console.log(`heading${i}.getAttribute("class")`)
//     }
// }
// changeText()


// call bak hell 

// setTimeout(()=>{
//     heading1.textContent = "heading1"
//     heading1.style.color = randomColorGenrator()
//     // heading1.nextElementSibling.textContent = "heading2"
//     setTimeout(()=>{
//         heading1.nextElementSibling.textContent = "heading2"
//         heading1.nextElementSibling.style.color = randomColorGenrator()
//         setTimeout(()=>{
//             heading3.textContent = "heading3"
//             heading3.style.color = randomColorGenrator()
//             setTimeout(()=>{
//                 heading4.textContent = "heading4"
//                 heading4.style.color = randomColorGenrator()
//                 setTimeout(()=>{
//                     heading5.textContent = "heading5"
//                     heading5.style.color = randomColorGenrator()
//                     setTimeout(()=>{
//                         heading6.textContent = "heading6"
//                         heading6.style.color = randomColorGenrator()
//                         setTimeout(()=>{
//                             heading7.textContent = "heading7"
//                             heading7.style.color = randomColorGenrator()
//                         },1000)
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)



function changeText(element,text,color,time,IfPriviousRight,IfPriviousWrong){
    setTimeout(()=>{
    if(element){
        element.textContent = text
        element.style.color = color
        if(IfPriviousRight){
            IfPriviousRight()
        }
    }else{
        if(IfPriviousWrong){
            IfPriviousWrong()
        }
    }
    },time)
}

changeText(heading1,"one","hotpink",1000,()=>{
    changeText(heading2,"two","hotpink",1000,()=>{
        changeText(heading3,"three","hotpink",1000,()=>{
            changeText(heading4,"four","hotpink",1000,()=>{
                changeText(heading5,"five","hotpink",1000,()=>{
                    changeText(heading6,"six","hotpink",1000,()=>{
                        changeText(heading7,"seven","hotpink",1000,()=>{
                            console.log("i am end this chain becuse i have no more element for applying function")
                        },()=>{
                            console.log("heading7 does not exis")
                        })
                    },()=>{
                        console.log("heading6 does not exis")
                    })
                },()=>{
                    console.log("heading5 does not exis")
                })
            },()=>{
                console.log("heading4 does not exis")
            })
        },()=>{
            console.log("heading3 does not exis")
        })
    },()=>{
        console.log("heading2 does not exis")
    })
},()=>{
    console.log("heading1 does not exis")
})
