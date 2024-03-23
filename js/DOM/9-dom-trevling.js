// dom traversing
// traveling in dom tree

const rootNodes = document.getRootNode()
// // console.log(rootNodes.childNodes)
// const htmlElementNodes = rootNodes.childNodes[0]
// // console.log(htmlElementNodes.childNodes[0])
// const headElement = htmlElementNodes.childNodes[0]
// const textElement = htmlElementNodes.childNodes[1]
// const bodyElement = htmlElementNodes.childNodes[2]

// // console.log(headElement.childNodes)
// console.log(headElement.parentNode)
// console.log(headElement.nextSibling)
// // how to skip new line space in nextSibling
// console.log(headElement.nextElementSibling)


// // console.log(textElement.childNodes)
// // console.log(bodyElement.childNodes[1])
// console.log(bodyElement.parentElement)


// const divElement = bodyElement.childNodes[1]
// // console.log(divElement.childNodes[1])

// const bodyH1Element = divElement.childNodes[1]
// // console.log(bodyH1Element.childNodes)
// // console.log(bodyH1Element.childNodes)


// const bodyDiv = bodyElement.childNodes[0]
// // console.log(bodyDiv)

// __________________________

// console.log(rootNodes.childNodes)
const htmlElementNodes = rootNodes.childNodes[0]
// console.log(htmlElementNodes.childNodes[2])
const bodyElementNodes = htmlElementNodes.childNodes[2]
// console.log(bodyElementNodes.childNodes[1])
const divElementnodes = bodyElementNodes.childNodes[1]
// console.log(divElementnodes.childNodes[1])
const headingElement = divElementnodes.childNodes[1]
// console.log(headingElement)
// headingElement.style.color = "red"
// headingElement.style.backgroundColor ="lightgreen"


const parent = headingElement.parentNode
console.log(parent)
parent.style.color="white"
parent.style.backgroundColor="grey"





