
const info = (title, para, contactBtn) => {
    let div = document.createElement("div")
    div.className = "classInfo"
    div.innerHTML = `<h1 class="title">${title}</h1>
                     <p>${para}</p>
                     <button>${contactBtn}</button>
                     `
                     
    return div
}

export {info}
