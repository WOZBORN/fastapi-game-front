<template>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Лидерборд - Кликер</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="container">
            <h1>🏆 ТОП ИГРОКОВ</h1>
            
            <table id="leaderboardTable">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Игрок</th>
                        <th>Счёт</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>PlayerOne</td>
                        <td class="score">9999</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>ClickMaster</td>
                        <td class="score">8542</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>FastFingers</td>
                        <td class="score">7621</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>ProGamer</td>
                        <td class="score">5430</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Newbie</td>
                        <td class="score">1234</td>
                    </tr>
                </tbody>
            </table>
            
            <div class="links back-btn">
                <a href="index.html">← Вернуться в игру</a>
            </div>
        </div>
    </body>
</template>