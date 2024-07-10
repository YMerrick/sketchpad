const sketchPad = document.querySelector(".main-container");

function addHoverEffect (node) {
    node.addEventListener("mouseover", addBackgroundColor);
}

function addBackgroundColor (node) {
    if (!node.target.style["background-color"]) {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        node.target.style["background-color"] = `rgb(${red},${green},${blue})`;
        node.target.style["opacity"] = "0.1";
    }
    let alpha = Number(node.target.style["opacity"]);
    if (alpha < 1) {
        alpha += 0.1;
        node.target.style["opacity"]  = `${alpha}`;
    }
    
}

function addDivs (container, quantity) {
    let node;
    for (let i = 0; i < quantity**2; i++) {
        node = document.createElement("div");
        updateNodeStyle(node,quantity);
        addHoverEffect(node);
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

    addDivs(sketchPad,quantity);

}

populatePage(sketchPad,32);