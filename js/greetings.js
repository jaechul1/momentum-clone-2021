const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings"),
    currentHour = document.querySelector(".js-clock__hour"),
    doForm = document.querySelector(".js-toDoForm");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function judgeTime(text) {
    const time = parseInt(text);
    if (5 <= time && time < 12) {
        return "morning"
    } else if (12 <= time && time < 17) {
        return "afternoon"
    } else if (17 <= time && time < 21) {
        return "evening"
    } else {
        return "night"
    }
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    doForm.classList.add(SHOWING_CN);
    const timeNow = currentHour.innerText;
    const timeInterval = judgeTime(timeNow);
    greeting.innerText = `Good ${timeInterval}, ${text}.`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();