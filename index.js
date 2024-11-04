'use strict';
const form = document.querySelector('#input-form');
console.log(form);
const emailInput = document.querySelector('#email');
console.log(emailInput);
const subBtn = document.querySelector('.submit');
console.log(subBtn);
const message = document.querySelector('.error');
console.log(message);
const error = document.querySelector('.error-icon');
console.log(error);

// created a regualr expression to validate email adding the .test method to the regex variable and pass in the emailinput value as argument
//emailReg.test(emailInput.value)
const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const validateMail = function () {
  let mailValue = emailInput.value;
  if (mailValue === '') {
    error.style.display = 'block';
    message.textContent = 'Input a mail';
  } else if (!emailReg.test(mailValue)) {
    error.style.display = 'block';
    message.textContent = 'Please provide a valid mail';
  } else {
    error.style.display = 'none';
    message.textContent = 'sucess';
  }
};

//attched an event handler to the submit button to listen for events and prevent medtod to prevent form from submiting on click and called the validate function here o check mail input and also set the input field back to empty after submiting
const submit = e => {
  e.preventDefault();
  validateMail();
  emailInput.value = '';
};
subBtn.addEventListener('click', submit);

//extra functionality to make the Enter button act as the submit button added the event listener to the entire document thats why its not attached to any defined variable in the global scope
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    console.log(e);
    e.preventDefault();
    validateMail();
    emailInput.value = '';
  }
});
