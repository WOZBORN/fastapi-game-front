<template>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Регистрация - Кликер</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="container">
            <h1>📝 Регистрация</h1>
            
            <form id="registerForm">
                <div class="form-group">
                    <label>Имя пользователя</label>
                    <input type="text" id="username" required placeholder="Придумайте логин">
                </div>
                
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" id="email" required placeholder="example@mail.com">
                </div>
                
                <div class="form-group">
                    <label>Пароль</label>
                    <input type="password" id="password" required placeholder="Придумайте пароль">
                </div>
                
                <div class="form-group">
                    <label>Подтверждение пароля</label>
                    <input type="password" id="confirmPassword" required placeholder="Повторите пароль">
                </div>
                
                <button type="submit">Зарегистрироваться</button>
            </form>
            
            <div class="links">
                <a href="login.html">Уже есть аккаунт? Войти</a><br>
                <a href="index.html">← На главную</a>
            </div>
        </div>
    </body>
</template>