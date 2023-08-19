import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const subBtn = document.querySelector('button');

const LOCAL_KEY = 'feedback-form-state';

const savedState = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
form.elements.email.value = savedState.email || '';
form.elements.message.value = savedState.message || '';

form.addEventListener('input', throttle(getData, 500)); 

function getData(evt) {
    const data = {
        email: form.elements.email.value,
        message: form.elements.message.value,
    };
    localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
}

form.addEventListener('submit', handleSubmit);
function handleSubmit(evt) {
    evt.preventDefault();

    form.reset();
    localStorage.removeItem(LOCAL_KEY);

    console.log('Submitted data:', {
        email: form.elements.email.value,
        message: form.elements.message.value,
    });
}

