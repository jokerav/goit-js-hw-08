const throttle = require('lodash.throttle');
const KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector("input[type='email']");
const messageInput = document.querySelector("textarea[name='message']");

if (localStorage.getItem(KEY)) {
  const localS = localStorage.getItem(KEY);
  const parsedState = JSON.parse(localS);
  emailInput.value = parsedState.email;
  messageInput.value = parsedState.message;
}

form.addEventListener('input', throttle(onInputChange, 500));
form.addEventListener('submit', onSubmit);

function onInputChange() {
  localStorage.setItem(
    KEY,
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
  localStorage.removeItem(KEY);
  event.currentTarget.reset();
}
