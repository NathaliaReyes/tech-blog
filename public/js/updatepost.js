const updatepostFormHandler = async (event) => {
    event.preventDefault();
    alert('ALERT!!');
    // Collect values from the login form
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
    const id = document.querySelector('#post-id').value.trim();

    if (title && content) {
    // Send a POST request to the API endpoint
    const response = await fetch(`/api/posts/${id}`, { 
        method: 'PUT',
        body: JSON.stringify({ title, content, id }),
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
document.querySelector('.post-form').addEventListener('submit', updatepostFormHandler);

