import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');
addText();

const formData = {
    [email.name] : email.value,
    [message.name]: message.value,
};

localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput(event){
    formData[email.name] = email.value;
    formData[message.name] = message.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
};

function onFormSubmit(event){
    event.preventDefault();
    event.currentTarget.reset();
    console.log(formData);
    localStorage.removeItem(LOCALSTORAGE_KEY)
}

function addText() {
    const data = localStorage.getItem(LOCALSTORAGE_KEY);
    const valuesText = JSON.parse(data);
    if (!valuesText ) {
        return;
    }

    email.value = valuesText.email;
    message.value = valuesText.message;  
 }