import refs from './refs';

const checkEmptyFields = (input) => {
    if (input.value === '') {
        input.classList.add('is-invalid');
        input.setAttribute('placeholder', 'Поле обязательно для заполнения');
    };
};

const checkFieldsAfterResubmit = (input) => {
    if (input.value !== '' && input.classList.contains('is-invalid')) {
        input.classList.remove('is-invalid');
        input.removeAttribute('placeholder');
    };
};

const getEntryFields = (e) => {
    console.log('Имя: ', e.currentTarget.name.value);
    console.log('Телефон: ', e.currentTarget.tel.value);
    console.log('Email: ', e.currentTarget.email.value);
};

const onFormSubmit = (e) => {
    e.preventDefault();
    getEntryFields(e);

    refs.formInputs.forEach(input => {
        checkEmptyFields(input);
        checkFieldsAfterResubmit(input);
    });

    refs.form.reset();
};

refs.form.addEventListener('submit', onFormSubmit);