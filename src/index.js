import './scss/main.scss';
import refs from './js/refs';
import sidebar from './sidebar.json';
import items from './card-items.json';
import sidebarTpl from './tamplates/sidebar.hbs';
import cardItemsTpl from './tamplates/card-item.hbs';


const renderSidebar = sidebarTpl(sidebar);
refs.sidebar.insertAdjacentHTML('beforeend', renderSidebar);

const renderCardList = cardItemsTpl(items);
refs.cardList.insertAdjacentHTML('beforeend', renderCardList);