import SinglePlayerComponent from "./SinglePlayerComponent";
import SingleItemComponent from "./SingleItemComponent";

export default {
    props:['playertest'],

    template: `
    <div class="container">
        <div id="inventory">
            <item v-for="item in invenArray" 
                    :item="item"></item>
        </div>
        <div id="players">
                <player v-for="player in players" 
                :player="player"
                v-on:click.native="newAbil(player)"></player>

                <span id="currentDmg">{{currentPlayer.dmg}}</span>
        </div>
    </div>
    `,

    data: function(){
        return {
        }
      },

    created: function() {
    },

    mounted: function() {

        this.test();
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

        test() {
            this.invenArray = JSON.parse(localStorage.getItem('invenStr'));
            console.log(this.invenArray)

            var check = this.invenArray.filter(function (elm) {
                if (elm.ID == '3') {
                        return elm;
                   }
             });
            console.log(check.length > 0); // returns 1
            if (check.length > 0)
               {
                  check.forEach(element => {
                    var oldDmg = eval(this.players[0].dmg);
                    this.players[0].dmg = oldDmg + 5
                  });
                }
            }

        
        },

    components: {
        player: SinglePlayerComponent,
        item: SingleItemComponent
    }
}