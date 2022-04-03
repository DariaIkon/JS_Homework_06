let counterValue = 0;

const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');

increment.addEventListener('click', onIncrement);

function onIncrement (event) { 
    counterValue += 1;
    value.textContent = `${counterValue}`;
}

decrement.addEventListener('click', onDecrement);
function onDecrement (event) { 
    counterValue -= 1;
    value.textContent = `${counterValue}`;
}

