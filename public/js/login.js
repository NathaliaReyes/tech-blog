
// document.addEventListener('DOMContentLoaded', function() { 
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
    
        console.log(response);
        // const responseData = await response.json();
        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
            console.log("NO FUNCIONÓ")
        }
        }
    };
    document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
    // document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
    // const etiquetas = document.querySelectorAll('.form-group label')
    
    const labels = document.querySelectorAll('.form-group label');
    labels.forEach(label => {
        label.innerHTML = label.innerText
            .split('')
            .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
            .join('')
    });

// });