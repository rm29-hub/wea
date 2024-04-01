const card = (titleTwo) => {
    let div = document.createElement("div")
    div.className = "titleTwo"
    div.innerHTML = `<h1>${titleTwo}</h1>`
    
    return div
}
const pOne = (paraOne, btn1) => {
    let div = document.createElement("div")
    div.className = "classPOne"
    div.innerHTML = ` <p>${paraOne}</p>
                     <button>${btn1}</button>`
                     
    return div
}
const pTwo = (paraTwo, btn2) => {
    let div = document.createElement("div")
    div.className = "classPTwo"
    div.innerHTML = ` <p>${paraTwo}</p>
                     <button>${btn2}</button>`
                     
    return div
}
const pThree = (paraThree, btn3) => {
    let div = document.createElement("div")
    div.className = "classPThree"
    div.innerHTML = ` <p>${paraThree}</p>
                     <button>${btn3}</button>`
                     
    return div
}


export {card, pOne, pTwo, pThree}
