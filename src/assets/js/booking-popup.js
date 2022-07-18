const btn = document.querySelector('.intro__btn');
const modalOverlay = document.querySelector('.booking__container');
const modal = document.querySelector('.booking__modal');
const btnClose = document.querySelector('.booking__line');

btn.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');

    modal.classList.remove('booking__modal--visible');

    document.querySelector(`[data-target='${path}']`).classList.add('booking__modal--visible');
    modalOverlay.classList.add('booking__container--visible');
    document.querySelector('body').classList.add('hidden');
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target == modalOverlay) {
        modalOverlay.classList.remove('booking__container--visible');
    
        modal.classList.remove('booking__modal--visible');

        document.querySelector('body').classList.remove('hidden');
    }
});

btnClose.addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target == btnClose) {
        modalOverlay.classList.remove('booking__container--visible');
    
        modal.classList.remove('booking__modal--visible');

        document.querySelector('body').classList.remove('hidden');
    }
});
