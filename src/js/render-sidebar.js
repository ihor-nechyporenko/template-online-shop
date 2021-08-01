import refs from './refs';
import sidebarTpl from '../tamplates/sidebar.hbs';
import sidebar from '../sidebar.json';

const renderSidebar = sidebarTpl(sidebar);
refs.sidebar.insertAdjacentHTML('afterbegin', renderSidebar);