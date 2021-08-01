import refs from './refs';
import cardItemsTpl from '../tamplates/card-item.hbs';
import items from '../card-items.json';

const renderCardList = cardItemsTpl(items);
refs.cardList.insertAdjacentHTML('beforeend', renderCardList);