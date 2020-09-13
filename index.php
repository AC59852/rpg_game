<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/main.css">
    <script src="https://unpkg.com/vue"></script>
    <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
</head>
<body>
    <main id="app">
        <div id="wallet">$55</div>
            <playertest :key="$route.fullPath"></playertest>

            <!-- <span id="currentDmg">{{currentPlayer.dmg}}</span> -->
        <router-view></router-view>
        <div id="textbox">
            <div id="textElem">
                <object data="assets/text_triangles_left" type="image/svg+xml"></object>
                <object data="assets/text_triangles_right" type="image/svg+xml"></object>
            </div>
            <div id="textboxContent">
                <h2 id="textbox_name">Lorem dolor</h2>
                <p id="textbox_text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi perferendis fuga repudiandae tempora. Voluptates illo dolores accusamus nostrum laboriosam doloribus aperiam! Ratione soluta dolorum, odit libero enim possimus et esse!
                </p>
            </div>
        </div>
    </main>    
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script type="module" src="js/main.js"></script>
</body>
</html>