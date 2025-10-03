let bodyE1 = document.querySelector("body")

bodyE1.addEventListener("mousemove", (event) => {
    let xPos = event.offsetX;
    let yPos = event.offsetY;
    let spanE1 = document.createElement("span");
    bodyE1.appendChild(spanE1);
})