// Ініціалізація статистики
let votes = JSON.parse(localStorage.getItem('votes')) || { Modern: 0, Minimalistic: 0, Vintage: 0 };

// Оновлення статистики на сторінці
function updateVoteCounts() {
    document.getElementById('modern-votes').textContent = `Votes: ${votes.Modern}`;
    document.getElementById('minimalistic-votes').textContent = `Votes: ${votes.Minimalistic}`;
    document.getElementById('vintage-votes').textContent = `Votes: ${votes.Vintage}`;
}

// Подія для голосування
document.querySelectorAll('.vote-button').forEach(button => {
    button.addEventListener('click', () => {
        const style = button.dataset.style;
        votes[style] += 1;
        localStorage.setItem('votes', JSON.stringify(votes));
        updateVoteCounts();
    });
});

// Обробка форми збереження ніку та опису
document.getElementById('favorite-style-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Отримуємо дані з форми
    const nickname = document.getElementById('nickname').value;
    const description = document.getElementById('favorite-style-description').value;

    // Зберігаємо нік та опис у localStorage
    const userData = { nickname, description };
    localStorage.setItem('userData', JSON.stringify(userData));

    // Відображаємо підтвердження
    document.getElementById('saved-response').textContent = `Thank you, ${nickname}! Your favorite style description has been saved.`;

    // Очищення полів форми
    document.getElementById('nickname').value = '';
    document.getElementById('favorite-style-description').value = '';
});

// Завантаження збережених даних
window.onload = function() {
    const savedVotes = localStorage.getItem('votes');
    if (savedVotes) votes = JSON.parse(savedVotes);
    updateVoteCounts();

    const savedData = localStorage.getItem('userData');
    if (savedData) {
        const userData = JSON.parse(savedData);
        document.getElementById('saved-response').textContent = `Hello, ${userData.nickname}! Your saved description: ${userData.description}`;
    }
};
