import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const subBtn = document.querySelector('button');

const LOCAL_KEY = 'feedback-form-state';

const savedState = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
form.elements.email.value = savedState.email || '';
form.elements.message.value = savedState.message || '';

const throttledGetData = throttle(getData, 500);

form.addEventListener('input', throttledGetData);

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
    
    const submittedData = {
        email: form.elements.email.value,
        message: form.elements.message.value,
        };
    console.log('Submitted data:', submittedData);
    
    form.reset();
    localStorage.removeItem(LOCAL_KEY);
}

