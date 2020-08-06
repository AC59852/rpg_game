<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/main.css">
    <script src="https://unpkg.com/vue"></script>
    <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
</head>
<body>
    <main id="app">
        <div id="wallet">$55</div>
        <span id="inventory">
            
        </span>
        <div id="players">
            <player v-for="player in players" 
            :name="player.name"
            :ability="player.ability"
            :dmg="player.dmg"
            v-on:click.native="newAbil(player)"></player>

            <span id="currentDmg">{{currentPlayer.dmg}}</span>
        </div>
        <router-view></router-view>
    </main>    
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script type="module" src="js/main.js"></script>
</body>
</html>