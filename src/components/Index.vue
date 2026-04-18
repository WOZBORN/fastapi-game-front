<template>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Кликер - Главная</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="container">
            <h1>⚡ КЛИКЕР ⚡</h1>
            
            <div style="text-align: center; margin-bottom: 30px;">
                <p style="font-size: 1.2em; margin-bottom: 10px;">Ваш счёт:</p>
                <div style="font-size: 4em; font-weight: bold; color: #e94560;" id="scoreDisplay">0</div>
            </div>

            <button id="clickBtn" style="margin-bottom: 20px;">КЛИКНИ МЕНЯ!</button>
            
            <div class="links">
                <a href="leaderboard.html">🏆 Лидерборд</a>
                <a href="login.html">🔑 Войти</a>
                <a href="register.html">📝 Регистрация</a>
            </div>
            
            <div style="margin-top: 20px; text-align: center; font-size: 0.9em; color: #888;">
                <span id="userStatus">Не авторизован</span>
            </div>
        </div>

        <script>
            // Просто для демо — без логики, только интерфейс
            let score = 0;
            const clickBtn = document.getElementById('clickBtn');
            const scoreDisplay = document.getElementById('scoreDisplay');
            
            clickBtn.addEventListener('click', () => {
                score++;
                scoreDisplay.textContent = score;
            });
        </script>
    </body>
</template>