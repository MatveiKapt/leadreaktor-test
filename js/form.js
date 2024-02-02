const loginForm = document.querySelector('#login-form');
const formInputsWrappers = document.querySelectorAll('.form__input-border');
const showLoginPasswordButton = document.querySelector('#show-login-password');
const loginPasswordInput = document.querySelector('#login-password');
const showRegisterPasswordButton = document.querySelector('#show-register-password');
const registerPasswordInput = document.querySelector('#register-password');

const onFormInputClick = (wrapper) => {
  return () => {
    formInputsWrappers.forEach((wrapper) => {
      wrapper.classList.remove('form__input-border--focus');
    })
    const input = wrapper.querySelector('input');
    input.focus();
    wrapper.classList.add('form__input-border--focus');

    input.addEventListener('blur', () => {
      wrapper.classList.remove('form__input-border--focus');
    });
  };
};

formInputsWrappers.forEach((wrapper) => {
  wrapper.addEventListener('click', onFormInputClick(wrapper));
});

const onShowPasswordButtonClick = (button, input) => {
  return () => {
    if (input.type === 'password') {
      input.type = 'text';
      input.classList.add('form__input--password-show');
      button.classList.add('form__show-password-button--show');
    } else if (input.type === 'text') {
      input.type = 'password';
      input.classList.remove('form__input--password-show');
      button.classList.remove('form__show-password-button--show');
    }
  }
};

if (showLoginPasswordButton) {
  showLoginPasswordButton.addEventListener('click', onShowPasswordButtonClick(showLoginPasswordButton, loginPasswordInput));
}

if (showRegisterPasswordButton) {
  showRegisterPasswordButton.addEventListener('click', onShowPasswordButtonClick(showRegisterPasswordButton, registerPasswordInput));
}

const onLoginFormSubmit = (evt) => {
  evt.preventDefault();

  const emailInput = evt.target.querySelector('#login-email');
  const rememberCheckbox = evt.target.querySelector('#form-checkbox');

  if (rememberCheckbox.checked) {
    localStorage.setItem('email', emailInput.value);
  }

  evt.target.reset();
};

if (loginForm) {
  loginForm.addEventListener('submit', onLoginFormSubmit);
}

