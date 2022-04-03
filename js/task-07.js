const inputSize = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

inputSize.addEventListener('input', (e) => {
    text.style.fontSize = `${e.currentTarget.value}px`
});