//? Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн - стиль.
//? При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.
//?⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.

const refs = {
  body: document.querySelector("body"),
  startBtn: document.querySelector("[data-action=start]"),
  stopBtn: document.querySelector("[data-action=stop]"),
};
const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

refs.startBtn.addEventListener("click", changeColors);
refs.stopBtn.addEventListener("click", stopChange);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let timerId;

function changeColors() {
  timerId = setInterval(() => {
    let id = randomIntegerFromInterval(0, colors.length);
    refs.body.style.backgroundColor = colors[id];
    refs.startBtn.disabled = true;
  }, 1000);
}

function stopChange() {
  if (event.target) {
    clearInterval(timerId);
    refs.startBtn.disabled = false;
  }
}
