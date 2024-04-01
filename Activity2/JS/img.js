
const img = (image) => {
    let div = document.createElement("div")
    div.className = "girl"
    div.innerHTML = `<img src="./images/${image}">`

    return div
}

const imgOne = (image) => {
    let div = document.createElement("div")
    div.className = "pOnePic"
    div.innerHTML = `<img src="./images/${image}">`

    return div
}

const imgTwo = (image) => {
    let div = document.createElement("div")
    div.className = "pTwoPic"
    div.innerHTML = `<img src="./images/${image}">`

    return div
}

const imgThree = (image) => {
    let div = document.createElement("div")
    div.className = "pThreePic"
    div.innerHTML = `<img src="./images/${image}">`

    return div
}

export {img, imgOne, imgTwo, imgThree}
