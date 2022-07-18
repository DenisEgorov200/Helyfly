const readMoreBtns = document.querySelectorAll('[expand-more]');
const moreText = document.querySelectorAll('.organizer__more-text');
const dots = document.querySelector('.dots');

function expand() {
    const showContent = document.getElementById(this.dataset.target);
    if (showContent.classList.contains('organizer__content-more--visible')) {
        this.innerHTML = this.dataset.showtext;
        dots.style.display = 'inline'
    } else {
        this.innerHTML = this.dataset.hidetext;
        dots.style.display = 'none'
    }
    showContent.classList.toggle('organizer__content-more--visible');
}

readMoreBtns.forEach(expandMore => {
    expandMore.addEventListener('click', expand)
});