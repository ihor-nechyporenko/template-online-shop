import refs from './refs';

const slides = document.querySelectorAll('[data-slider-img]');

let i = 0;

const addInitialAnimationClasses = (removeClass, addClass) => {
    slides.forEach(slide => {
        slide.classList.remove(removeClass);
        slide.classList.add(addClass);
    });
};

const slideFromLeftToRight = () => {
    if (i < slides.length - 1) {
        slides[i].classList.remove('show');
        i += 1;
        slides[i].classList.add('show');
    } else {
        i = 0;
        slides[slides.length - 1].classList.remove('show');
        slides[i].classList.add('show');
    };
};

const slideFromRightToLeft = () => {
    if (i > 0) {
        slides[i].classList.remove('show');
        i -= 1;
        slides[i].classList.add('show');
    } else {
        i = slides.length - 1;
        slides[0].classList.remove('show');
        slides[i].classList.add('show');
    };
};

const onRightBtnClick = () => {
    addInitialAnimationClasses('fade-left', 'fade-right');

    setTimeout(() => {
        slideFromLeftToRight();
    }, 100);
};

const onLeftBtnClick = () => {
    addInitialAnimationClasses('fade-right', 'fade-left');

    setTimeout(() => {
        slideFromRightToLeft();
    }, 100);
};

refs.sliderRightBtn.addEventListener('click', onRightBtnClick);
refs.sliderLeftBtn.addEventListener('click', onLeftBtnClick);

const changeSlidesByInterval = () => {
    addInitialAnimationClasses('fade-left', 'fade-right');

    setInterval(() => {
        onRightBtnClick();
    }, 4000);
};

changeSlidesByInterval();