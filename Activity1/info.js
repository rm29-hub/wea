const info = (title1, title2, para1, para2, aboutBtn, contactBtn, viewBtn) => {
    let div = document.createElement("div")
    div.className = "infoL"
    div.innerHTML = `<h1 class="title1">${title1}</h1>
                     <h1 class="title2">${title2}</h1>
                     <p>${para1}</p>
                     <p>${para2}</p>
                     <button>${aboutBtn}</button>
                     <button>${contactBtn}</button>
                     <button>${viewBtn}</button>
                     `
                     
    return div
}

export {info}