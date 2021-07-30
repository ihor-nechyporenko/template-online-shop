import refs from './refs';

refs.feedbackBtn.addEventListener('click', onFeedbackClick);
refs.backdrop.addEventListener('click', onBackdropClick);
refs.modalCloseBtn.addEventListener('click', onCloseModal);

function onFeedbackClick(e) {
  e.preventDefault();
  onOpenModal();
};

function onOpenModal() {
  window.addEventListener('keydown', onEscKeyPress);
  refs.modal.classList.add('is-open');
};

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  refs.modal.classList.remove('is-open');
};

function onBackdropClick(e) {
  if (!e.target.classList.contains('modal__overlay')) {
    return;
    };

  onCloseModal();
}

function onEscKeyPress(e) {
  if (e.code === 'Escape') {
    onCloseModal();
    };
};
