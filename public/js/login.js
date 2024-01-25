
const loginFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#userName-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (name && password) {
    console.log(name);
    console.log(password);
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      console.log(response);
      alert('Failed to log in.');
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#userName-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && password) {
    console.log(name);
    console.log(password);
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
};

document
  .querySelector('.loginSec')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signupSection')
  .addEventListener('submit', signupFormHandler);