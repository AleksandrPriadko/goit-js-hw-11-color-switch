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
    console.log("Start");
    refs.btnStart.setAttribute("disabled", "");
    if (refs.btnStop.hasAttribute("disabled")) {
        refs.btnStop.removeAttribute("disabled");
    };

    refs.btnStop.removeEventListener("click", randomColorsStart)
};

function randomColorsStop() {
    clearInterval(timerId);
    console.log("Stop")
    refs.btnStop.setAttribute("disabled", "");
    if (refs.btnStart.hasAttribute("disabled")) {
        refs.btnStart.removeAttribute("disabled");
    };
    refs.btnStart.removeEventListener("click", randomColorsStop)
}