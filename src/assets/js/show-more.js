// // const showMore = document.querySelector('.photo__more');
// // const photoLength = document.querySelectorAll('.gallery__item').length;
// // let items = 8;

// // showMore.addEventListener('click', function() {
// //     items += 4;
// //     const array = Array.from(document.querySelector('.gallery').children);
// //     const visItems = array.slice(0, items);

// //     visItems.forEach(el => el.classList.add('is-visible'));

// //     if (visItems.length === photoLength) {
// //         visItems.forEach(el => el.classList.remove('is-visible'));
// //     }
// // });

// const showMore = document.querySelector('.photo__more');
// const photoLength = document.querySelectorAll('.gallery__item');
// const arrowImg = document.querySelectorAll('.photo__img')
// console.log(arrowImg);
// let items = 8;

// showMore.addEventListener('click', function() {
//     for (let i = items; i < items + 4; i++) {
//         if (photoLength[i]) {
//             photoLength[i].style.display = 'block';
//         }
//     }
//     items += 4;
//     if (items === photoLength.length) {
//         // event.target.style.display = 'none'
//         showMore.style.display = 'none'
//     }
// });