// const form = document.querySelector('form');

// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(e) {
//     e.preventDefault();
//     const inputEl = e.currentTarget.elements;
//     const member = {};

//     if (inputEl.email.value === '' || inputEl.password.value === '') {
//         return alert('Все поля должны быть заполнены')
//     } else {
//         member.email = inputEl.email.value;
//         member.password = inputEl.password.value;
//     }

//     console.log(member);

//     e.currentTarget.reset();
// }



const form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {elements: { email, password },} = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Все поля должны быть заполнены!");
  }

  console.log({email: email.value, password: password.value,});
  event.currentTarget.reset();
}