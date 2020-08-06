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
            {name: "player1", ability: "pistol shot", dmg: "15"},
            {name: "player2", ability: "punch", dmg: "25"},
            {name: "player3", ability: "knife lunge", dmg: "35"},
        ],
        currentPlayer: {},
    }),

    created: function() {

        bus.$emit('myEvent',true);
        this.test();

    },

    mounted: function() {
    },

    methods: {
        newAbil(info) {
            this.currentPlayer = info;
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
        }
    },

    components: {
        player: SinglePlayerComponent
    }
}