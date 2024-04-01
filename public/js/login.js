const labels = document.querySelectorAll('.form-group label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
});



const loginFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the login form
    const name = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (name && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ name, password }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/profile');
    } else {
        alert(response.statusText);
    }
    }
};

const signupFormHandler = async (event) => {
event.preventDefault();

const name = document.querySelector('#name-signup').value.trim();
const password = document.querySelector('#password-signup').value.trim();

    if (name && password) {
        const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
        document.location.replace('/profile');
        } else {
        alert(response.statusText);
        }
    }
};
  
document
.querySelector('.login-form').addEventListener('submit', loginFormHandler);

// document
// .querySelector('.signup-form').addEventListener('submit', signupFormHandler);

