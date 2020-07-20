
function closeFunc(){
    let pDom = document.getElementById('hide-me')
    // Option 1: Change the style attribute
    // pDom.style.display = "none"

    // option 2: Chnage the class name
    pDom.className = "close";
}

function openFunc(){
    let pDom = document.getElementById('hide-me')
    // Option 1: Change the style attribute
    // pDom.style.display = "block"

    // option 2: Chnage the class name
    pDom.className = "open";
}