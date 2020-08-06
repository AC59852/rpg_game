  // Component Code
  export default {
      props: ["enemy"],
    // Component HTML using child components
    template: `
    <div class="container">
       <div id="enemy">
        <h1>{{currentEnemy.name}}</h1>
        <h2 id="enemyHP">HP: {{currentEnemy.hp}}</h2>

        <h2 @click="dmgEnemy()">Damage Enemy</h2>
       </div>
    </div>
    `,

    data: function() {
        return {
            enemies: [
                {name: 'Enemy 1', hp: '100', damage: '15'},
                {name: 'Enemy 2', hp: '200', damage: '25'},
                {name: 'Enemy 3', hp: '300', damage: '35'},
                {name: 'Enemy 4', hp: '400', damage: '45'},
                {name: 'Enemy 5', hp: '500', damage: '55'},
            ],

            currentEnemy: {}
        }
    },

    mounted: function() {
        $("div#text").hide();

        const math = Math.floor(Math.random() * 100);
        console.log(math);

        if (math < 40) {
            const idx = Math.floor(Math.random() * this.enemies.length);
            this.currentEnemy = this.enemies[idx];
            $("div#text").hide();
        } else {
            $("div#enemy").hide();
            $("div#text").show();
        }
    },

    methods: {
        dmgEnemy() {
            let enemyHP = $("h2#enemyHP").text().replace("HP:", ""),
                dmg = $("span#currentDmg").text().replace("dmg:", "");

            var newHP = enemyHP -= dmg;

            if (enemyHP < 0) {
                alert("you killed it");
                $("h2#enemyHP").text("HP: 0");
            } else {
                $("h2#enemyHP").text("HP: " + newHP);
            }
        }
    }
}