const sketchPad = document.querySelector(".main-container");

const resetBtn = document.querySelector("#reset");

sketchPad.addEventListener("mouseover", (e) => {
    addBackgroundColor(e.target);
});

resetBtn.addEventListener("click", () => {
    const size = Number(prompt("Enter number of pixels:"));
    populatePage(sketchPad,size);
});

function addBackgroundColor (node) {
    if (!node.style["background-color"]) {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        node.style["background-color"] = `rgb(${red},${green},${blue})`;
        node.style["opacity"] = "0.1";
    }
    let alpha = Number(node.style["opacity"]);
    if (alpha < 1) {
        alpha += 0.1;
        node.style["opacity"]  = `${alpha}`;
    }
    
}

function addDivs (container, quantity) {
    let node;
    for (let i = 0; i < quantity**2; i++) {
        node = document.createElement("div");
        updateNodeStyle(node,quantity);
        container.appendChild(node);
    }
}

function updateNodeStyle (node,size) {
    node.style.cssText = `flex: 1 0 ${1 / size * 100}%`;    
}   

function clearContainer (sketchPad) {
    sketchPad.replaceChildren();
}

function populatePage (sketchPad,quantity) {
    clearContainer(sketchPad);
    addDivs(sketchPad,quantity);
}

addDivs(sketchPad,16);