import SinglePlayerComponent from "./SinglePlayerComponent";

export default {
    props:['playertest'],

    template: `
    <div id="players">
            <player v-for="player in players" 
            :player="player"
            v-on:click.native="newAbil(player)"></player>

            <span id="currentDmg">{{currentPlayer.dmg}}</span>
        </div>
    `,

    data: () => ({
        players: [
            {name: "player1", ability: "pistol shot", dmg: "15", hp: "100"},
            {name: "player2", ability: "punch", dmg: "25",  hp: "100"},
            {name: "player3", ability: "knife lunge", dmg: "35",  hp: "25"},
        ],
        currentPlayer: {name: "player1", ability: "pistol shot", dmg: "15", hp: "100"},
    }),

    created: function() {
        this.test();
    },

    mounted: function() {

         bus.$on('healing',() => {
             console.log(this.players[0].hp);
         })
        
        // enemy damage event, can be reused easily for basic damage
        bus.$on('myEvent',() => {
            let currentHp = this.currentPlayer.hp,
                 enemyDmg = $("h3#enemyDmg").text();
                
                 var currentDmgTaken = currentHp -= enemyDmg;
                 console.log(currentDmgTaken)

                if (this.currentPlayer.name == this.players[0].name) {
                    this.players[0].hp = currentDmgTaken
                }
                    
                    if (this.players[0].hp <= 0) {
                        this.players[0].hp = "0";
                        this.players[0].dmg = "0";
                      };
                  
                if (this.currentPlayer.name == this.players[1].name) {
                    this.players[1].hp = currentDmgTaken
                }
                    
                    if (this.players[1].hp <= 0) {
                        this.players[1].hp = "0";
                        this.players[1].dmg = "0";
                      };

                if (this.currentPlayer.name == this.players[2].name) {
                    this.players[2].hp = currentDmgTaken
                }
                    
                    if (this.players[2].hp <= 0) {
                        this.players[2].hp = "0";
                        this.players[2].dmg = "0";
                      };
                
                if (this.players[0].hp == 0 && this.players[1].hp == 0 && this.players[2].hp == 0) {
                        alert("all of your characters are dead")
                    }
        })
    },

    methods: {
        newAbil(info) {
            this.currentPlayer = info;
        },

        test2() {
            console.log(this.players[0]);
        },

        test() {
            if (!$("span#inventory".length)) {
                return
            } else if ($("span.item1").length){
                this.players[0].dmg = "5";
            }
        
            if (!$("span#inventory".length)) {
                return
            } else if ($("span.item2").length){
                let result = $("span.item2");

                for (let i = 0; i < n; i++) {
                    result *= x;
                    }
                }
            },
        
        item3() {
            console.log("test");
        },

        
        },

    components: {
        player: SinglePlayerComponent
    }
}