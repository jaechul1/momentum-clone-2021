const date = document.querySelector(".js-clock__date");
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
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    date.innerText = `${month}/${day}`;
    hour.innerText = `${concatZero(hours)}`;
    minute.innerText = `${concatZero(minutes)}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();