// background images from https://unsplash.com

const IMAGE_API_KEY = "ELNzLdQ4lbXAfo5OIQrThEbXsKGqh3p2tTxBvFI69yA";
const IMAGE_URL = `https://api.unsplash.com/photos/random/?client_id=${IMAGE_API_KEY}&query=landscape&orientation=landscape&content_filter=high`;

const body = document.querySelector("body");
const authorName = document.querySelector(".js-author__name");
const authorUrl = document.querySelector(".js-author__url");
const photoTitle = document.querySelector(".js-title")
const lctn = document.querySelector(".js-location");

function checkNull(text) {
    if (text !== null) {
        return text
    } else {
        return ""
    }
}

function writeMeta(json) {
    authorName.innerText = `${checkNull(json.user.first_name)} ${checkNull(json.user.last_name)}`;
    authorUrl.href = json.user.links.html;
    photoTitle.innerText = json.alt_description;
    lctn.innerText = checkNull(json.location.title);
}

function handleImgLoad() {
    body.classList.remove("nshowing");
}

function printImage(json) {
    const bgImage = new Image();
    bgImage.src = json.links.download;
    bgImage.classList.add("bgImage");
    body.appendChild(bgImage);
    bgImage.addEventListener("load", handleImgLoad);
    
}

function getImage() {
    fetch(IMAGE_URL)
    .then(response => response.json())
    .then(json => {
        console.log(json);
        writeMeta(json);
        printImage(json);
    })
}

function init() {
    getImage();
}

init();