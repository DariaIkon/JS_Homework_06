// console.log('123');
const mainEl = document.querySelector('#categories');
console.log(mainEl);

const totalEl = mainEl.children;
console.log('Number of categories:', totalEl.length);
console.log(totalEl);
Array.from(totalEl).forEach(el => {
    console.log(
`Category: ${el.querySelector('h2').textContent}
// // Elements: ${el.querySelector('ul').children.length}`,
);
});



// const categoriesArr = document
//   .querySelector('#categories')
//   .querySelectorAll('.item');
// console.log(`Number of categories: ${categoriesArr.length}`);

// categoriesArr.forEach(elemnt => {
//   console.log(
//     `Category: ${elemnt.querySelector('h2').textContent}
// Elements: ${elemnt.querySelector('ul').children.length}`,
//   );
// });