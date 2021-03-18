const refs = {
    modalEl: document.querySelector('.js-lightbox'),
    modalOverlayEl: document.querySelector('.lightbox__overlay'),
    modalImageEl: document.querySelector('.lightbox__image'),
    modalBtnCloseEl: document.querySelector('button[data-action="close-lightbox"]'),
    galleryEl: document.querySelector('.js-gallery')
}


function onImageClick(event) {
    event.preventDefault();
    window.addEventListener('keydown', onEscKeyPress);
    refs.modalEl.classList.add('is-open');
    refs.modalImageEl.src = event.target.dataset.source;
};

function onModalClose(event) {
    window.removeEventListener('keydown', onEscKeyPress);
    refs.modalEl.classList.remove('is-open');
    refs.modalImageEl.src = '';

};

function onEscKeyPress(event) {
    if (event.code === 'Escape') {
        onModalClose(event)
    }
};

 
refs.galleryEl.addEventListener('click', onImageClick);

refs.modalBtnCloseEl.addEventListener('click', onModalClose);

refs.modalOverlayEl.addEventListener('click', (event) => {
    if (event.currentTarget === event.target) {
        onModalClose()
    }
});