const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];
const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
let timerId = null;
const refs = {
    btnStart: document.querySelector('button[data-action="start"]'),
    btnStop: document.querySelector('button[data-action="stop"]')
};

refs.btnStart.addEventListener("click", randomColorsStart);
refs.btnStop.addEventListener("click", randomColorsStop);

function randomColorsStart() {
    timerId = setInterval(() => {
        document.body.style.background = colors[randomIntegerFromInterval(0, 5)]
    }, 1000);
    refs.btnStart.disabled = true;
    refs.btnStop.disabled = false;
    refs.btnStop.removeEventListener("click", randomColorsStart)
};

function randomColorsStop() {
    clearInterval(timerId);
    refs.btnStart.disabled = false;
    refs.btnStop.disabled = true;
    refs.btnStart.removeEventListener("click", randomColorsStop)
}