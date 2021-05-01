const body = document.querySelector("body"),
    authorName = document.querySelector(".js-author__name"),
    authorUrl = document.querySelector(".js-author__url"),
    lctn = document.querySelector(".js-location");

const IMG_NUMBER = 3;

const authorArray = ["Josh Reid", "Luca Micheli", "Chris Ried"];
const authorUrlArray =  ["https://unsplash.com/@joshuadavidreid", "https://unsplash.com/@lucamicheli", "https://unsplash.com/@cdr6934"];
const locationArray = ["Akureyri, Iceland", "Vestrahorn, Iceland", "Kirkjufellsfoss, Iceland"];

function writeMeta(number) {
    authorName.innerText = authorArray[number];
    authorUrl.href = authorUrlArray[number];
    lctn.innerText = locationArray[number];
}

function paintImage(number) {
    const imgUrl = `images/${number + 1}.jpg`
    let tempImg = document.createElement("img");
    tempImg.src = imgUrl;
    tempImg.addEventListener("load",  event => {
        body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6), transparent, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(${imgUrl})`;
        body.classList.remove("nshowing");
    });
    writeMeta(number);
}

function genRandom() {
    return Math.floor(Math.random() * IMG_NUMBER);
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();