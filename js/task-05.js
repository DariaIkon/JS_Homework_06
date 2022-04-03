const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', (e) => {
    nameInput.value === ''
        ? nameOutput.textContent = 'Anonymus'
        : nameOutput.textContent = e.currentTarget.value;
});


