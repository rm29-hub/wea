
const img = (image) => {
    let div = document.createElement("div")
    div.className = "imageR"
    div.innerHTML = `<img src="./images/${image}">`

    return div
}
export{img}