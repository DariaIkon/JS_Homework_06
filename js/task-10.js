// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const createBtnEl = document.querySelector('button[data-create]');
// const destroyBtnEl = document.querySelector('button[data-destroy]');
// const containerBoxes = document.querySelector('#boxes');

// createBtnEl.addEventListener('click', onCreateBtn);
// let counterValue = 0;

// function onCreateBtn(e) {
//   counterValue += 1;

//   const amount = Number(e.currentTarget.previousElementSibling.value);
//   createBoxes(amount);
// }

// function createBoxes(amount) {
//   let num = 20 * counterValue;
//   for (let i = 1; i <= amount; i += 1) {
//     num += 10;
//     const box = `<div style="background-color: ${getRandomHexColor()}; height: ${num}px; width: ${num}px;"></div>`;
//     containerBoxes.insertAdjacentHTML('afterbegin', box);
//   }
// }

// destroyBtnEl.addEventListener('click', destroyBoxes);
// function destroyBoxes() {
//   counterValue = 0;
//   containerBoxes.innerHTML = '';
// }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesEl = document.querySelector("#boxes");
const inputEl = document.querySelector("input");
const addDivBtn = document.querySelector("[data-create]");
const delDivBtn = document.querySelector("[data-destroy]");
const boxWidth = 30;

let boxes = [];

function createBox() {
  for (let i = 0; i < inputEl.value; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${boxWidth + i * 10}px`;
    box.style.height = `${boxWidth + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
}

function appendBoxes() {
  boxesEl.append(...boxes);
}

function clearAll() {
  boxes = [];
  boxesEl.innerHTML = "";
}

addDivBtn.addEventListener("click", createBox);
addDivBtn.addEventListener("click", appendBoxes);
delDivBtn.addEventListener("click", clearAll);