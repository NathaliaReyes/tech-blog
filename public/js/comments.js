const newCommentFormHandler = async (event) => {
    event.preventDefault();
    const form = event.target;
    const postId = form.dataset.postId;

    const content = document.querySelector('#new-comment').value.trim();
    if (content) {
        const response = await fetch(`/api/comments/${postId}`, {
            method: 'POST',
            body: JSON.stringify({ content }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace(`/post/${postId}`);
        } else {
            alert('Failed to add comment!')
        }
    }
};

document.querySelector('.comment-form').addEventListener('submit', newCommentFormHandler);