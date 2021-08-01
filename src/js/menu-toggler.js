import refs from './refs';

const mobileMenuToggler = () => {
  refs.menuBtn.addEventListener('click', () => {
    const expanded = refs.menuBtn.getAttribute('aria-expanded') === 'true' || false;

    refs.menuBtn.classList.toggle('is-open');
    refs.menuBtn.setAttribute('aria-expanded', !expanded);

    refs.mobileMenu.classList.toggle('is-open');
  });
};

mobileMenuToggler();
