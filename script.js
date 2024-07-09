const sketchPad = document.querySelector(".main-container");

function addDivs (container, quantity) {
    for (let i = 0; i < quantity; i++) {
        node = document.createElement("div");
        container.appendChild(node);
    }
}

function updateContainerStyle (sketchPad,size) {
    for (let node of sketchPad.children) {
        node.style.flex = `1 0 ${1 / size * 100}%`;
    }
}   

function clearContainer (sketchPad) {
    sketchPad.replaceChildren();
}

function populatePage (sketchPad,quantity) {

    addDivs(sketchPad,quantity**2);

    updateContainerStyle(sketchPad,quantity);

}

populatePage(sketchPad,32);