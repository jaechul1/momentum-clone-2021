const body = document.querySelector("body"),
    authorName = document.querySelector(".js-author__name"),
    authorUrl = document.querySelector(".js-author__url"),
    lctn = document.querySelector(".js-location");

const IMG_NUMBER = 4;

const authorArray = ["Josh Reid", "Luca Micheli", "Chris Ried", "Jonatan Pie"];
const authorUrlArray =  ["https://unsplash.com/@joshuadavidreid", "https://unsplash.com/@lucamicheli", "https://unsplash.com/@cdr6934", "https://unsplash.com/@r3dmax"];
const locationArray = ["Akureyri, Iceland", "Vestrahorn, Iceland", "Kirkjufellsfoss, Iceland", "Fagradalsfjall, Iceland"]

function writeMeta(number) {
    authorName.innerText = authorArray[number];
    authorUrl.href = authorUrlArray[number];
    lctn.innerText = locationArray[number];
}

function paintImage(number) {
    writeMeta(number);
    body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6), transparent, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(images/${number + 1}.jpg)`;
}

function genRandom() {
    return Math.floor(Math.random() * IMG_NUMBER);
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();