const showMore = document.querySelector('.photo__more');
const photoLength = document.querySelectorAll('.gallery__item').length;
let items = 8;

showMore.addEventListener('click', function() {
    items += 4;
    const array = Array.from(document.querySelector('.gallery').children);
    const visItems = array.slice(0, items);

    visItems.forEach(el => el.classList.add('is-visible'));

    if (visItems.length === photoLength) {
        visItems = slice(0,-4)
    }
});