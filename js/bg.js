const body = document.querySelector("body");

const IMG_NUMBER = 3;

function handleImgLoad() {
    console.log("finished image loading");
    body.classList.remove("nshowing");
}

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
    image.addEventListener("load", handleImgLoad);
}

function genRandom() {
    return Math.floor(Math.random() * IMG_NUMBER);
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();