let btnE1 = document.querySelector(".btn");
let closeIconE1 = document.querySelector(".close-icon");
let trailerContainerE1 = document.querySelector(".trailer-container");
let videoE1 = document.querySelector("video");

btnE1.addEventListener("click", () => {
    trailerContainerE1.classList.add("active");
    videoE1.pause();
    videoE1.currentTime=0;
});