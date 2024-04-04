const deletepostFormHandler = async (event) => {
    event.preventDefault();
    // Collect values from the login form
    
    const id = event.target.getAttribute('data-id');
    

    if (id) {
    // Send a POST request to the API endpoint
    const response = await fetch(`/api/posts/${id}`, { 
        method: 'DELETE',
        body: JSON.stringify({ id }),
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
document.querySelector('#delete-post-button').addEventListener('click', deletepostFormHandler);
