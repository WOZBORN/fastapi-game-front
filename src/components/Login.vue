<template>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Вход - Кликер</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="container">
            <h1>🔐 Вход</h1>
            
            <form id="loginForm">
                <div class="form-group">
                    <label>Имя пользователя</label>
                    <input type="text" id="username" required placeholder="Введите логин">
                </div>
                
                <div class="form-group">
                    <label>Пароль</label>
                    <input type="password" id="password" required placeholder="Введите пароль">
                </div>
                
                <button type="submit">Войти</button>
            </form>
            
            <div class="links">
                <a href="register.html">Нет аккаунта? Зарегистрироваться</a><br>
                <a href="index.html">← На главную</a>
            </div>
        </div>
    </body>
</template>