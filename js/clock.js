const hour = document.querySelector(".js-clock__hour");
const minute =  document.querySelector(".js-clock__minute");

function concatZero(number) {
    if (number < 10) {
        return `0${number}`;
    } else {
        return `${number}`;
    }
}

function getTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    hour.innerText = `${concatZero(hours)}`;
    minute.innerText = `${concatZero(minutes)}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();