document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const style = document.getElementById('style').value;

    const responseMessage = `Thank you, ${name}! You have chosen ${style.toUpperCase()} as your favorite style.`;

    document.getElementById('response').textContent = responseMessage;
});
