// import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form')
addText();

const formData = {};

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput(event){
    formData[event.target.name] = event.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
};

function onFormSubmit(event){
    event.preventDefault();
    event.currentTarget.reset();
    console.log(localStorage.getItem(LOCALSTORAGE_KEY));
    localStorage.removeItem(LOCALSTORAGE_KEY)
}

function addText() {
    const data = localStorage.getItem(LOCALSTORAGE_KEY);
    if (!data) {
        return;
    }

    const value = JSON.parse(data);

    if(value.email){
     form.email.value = value.email;
    } else { 
        form.email.value = '' 
    }

    if (value.message) {
           form.message.value = value.message;
    } else {
           form.message.value = '';
    }
}