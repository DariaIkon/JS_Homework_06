function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector('.change-color');
const color = document.querySelector('.color');

button.addEventListener('click', () => {
  color.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
  button.style.backgroundColor = getRandomHexColor();
});


// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const buttonEl = document.querySelector('.change-color');

// buttonEl.addEventListener('click', onChangeColor);

// function onChangeColor(e) {
//   document.body.style.backgroundColor = getRandomHexColor();
//   e.currentTarget.previousElementSibling.firstElementChild.textContent =
//     getRandomHexColor();
// }