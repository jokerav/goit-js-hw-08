const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector("input[type='email']");
const messageInput = document.querySelector("textarea[name='message']");

if (localStorage.getItem('feedback-form-state')) {
  const localS = localStorage.getItem('feedback-form-state');
  const parsedState = JSON.parse(localS);
  emailInput.value = parsedState.email;
  messageInput.value = parsedState.message;
}

form.addEventListener('input', throttle(onInputChange, 500));
form.addEventListener('submit', onSubmit);

function onInputChange() {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({
      email: emailInput.value,
      message: messageInput.value,
    }),
  );
}

function onSubmit(event) {
  event.preventDefault();
  const msg = { email: emailInput.value, message: messageInput.value };
  console.log(msg);
  localStorage.removeItem('feedback-form-state');
  event.currentTarget.reset();
}
