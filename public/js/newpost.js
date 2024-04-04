const newpostFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the login form
    const title = document.querySelector('#newpost-title').value.trim();
    const content = document.querySelector('#newpost-content').value.trim();

    if (title && content) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/posts/new', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
    });

    console.log(response);
    // const responseData = await response.json();
    if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/profile');
    } else {
        alert(response.statusText);
    }
    }
};
document.querySelector('.newpost-form').addEventListener('submit', newpostFormHandler);