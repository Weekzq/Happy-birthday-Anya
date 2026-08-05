// ===== КОНФЕТТИ =====
function createConfetti() {
    const container = document.getElementById('confetti-container');
    const colors = ['#ff6b8a', '#ff8fa3', '#ffb3c6', '#ffc2d1', '#ffd1dc', '#ffa5b0', '#ff7b9c', '#ff99b0'];

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = (Math.random() * 8 + 4) + 'px';
        confetti.style.height = (Math.random() * 8 + 4) + 'px';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.animationDelay = Math.random() * 4 + 's';
        container.appendChild(confetti);
    }
}
createConfetti();

// ===== КНОПКА "ЕЩЁ ПОЖЕЛАНИЕ" =====
document.getElementById('wishBtn').addEventListener('click', function() {
    const resultDiv = document.getElementById('wishResult');

    const wishes = [
        '🎯 Будь самой крутой!',
        '🚀 Новых побед в учёбе!',
        '⭐ Сияй ярко!',
        '💪 Ты всё сможешь!',
        '🎉 Весёлых приключений!',
        '🌟 Пусть сбываются мечты!',
        '🔥 Ты — огонь!',
        '📚 Отличных оценок!',
        '🎊 Самого классного настроения!',
        '🌈 Пусть всё получается!'
    ];

    const random = wishes[Math.floor(Math.random() * wishes.length)];
    resultDiv.textContent = random;

    resultDiv.style.transform = 'scale(0)';
    setTimeout(() => {
        resultDiv.style.transform = 'scale(1)';
        resultDiv.style.transition = 'transform 0.4s ease';
    }, 100);
});

console.log('🎉 С ДНЁМ РОЖДЕНИЯ, АНЯ! 🎉');