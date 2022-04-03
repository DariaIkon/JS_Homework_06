const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const createEl = function (el) {
  const createLi = document.createElement('li');
  createLi.classList.add('item');
  createLi.textContent = el;
  return createLi;
}

const allLi = ingredients.map(createEl);

console.log(allLi);

document.querySelector('#ingredients').append(...allLi);

const ulListEl = document.querySelector('#ingredients');





const list = ingredients.map(el => {
  const newLiEl = document.createElement('li');
  newLiEl.textContent = el;
  newLiEl.classList.add('item');
  return newLiEl;
});

ulListEl.append(...list);