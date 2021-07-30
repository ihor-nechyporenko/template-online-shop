import './scss/main.scss';
import refs from './js/refs';
import sidebar from './sidebar.json';
import items from './card-items.json';
import sidebarTpl from './tamplates/sidebar.hbs';
import cardItemsTpl from './tamplates/card-item.hbs';

const renderSidebar = sidebarTpl(sidebar);
refs.sidebar.insertAdjacentHTML('afterbegin', renderSidebar);

const renderCardList = cardItemsTpl(items);
refs.cardList.insertAdjacentHTML('beforeend', renderCardList);

refs.feedbackBtn.addEventListener('click', onFeedbackClick);
refs.backdrop.addEventListener('click', onBackdropClick);
refs.modalCloseBtn.addEventListener('click', onCloseModal);

function onFeedbackClick(e) {
  e.preventDefault();
  onOpenModal();
}

function onOpenModal() {
  window.addEventListener('keydown', onEscKeyPress);
  refs.modal.classList.add('is-open');
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  refs.modal.classList.remove('is-open');
}

function onBackdropClick(e) {
  if (!e.target.classList.contains('modal__overlay')) {
    return;
  }

  onCloseModal();
}

function onEscKeyPress(e) {
  if (e.code === 'Escape') {
    onCloseModal();
  }
}
