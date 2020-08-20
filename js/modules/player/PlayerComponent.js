import SinglePlayerComponent from "./SinglePlayerComponent";

export default {
    props:['player'],

    template: `
    <div id="players">
            <player v-for="player in players" 
            :player="player"
            v-on:click.native="newAbil(player)"></player>

            <span id="currentDmg">{{currentPlayer.dmg}}</span>
        </div>
    `,

    data: {
        players: [
            {name: "player1", ability: "pistol shot", dmg: "15"},
            {name: "player2", ability: "punch", dmg: "25"},
            {name: "player3", ability: "knife lunge", dmg: "35"},
        ],
        currentPlayer: {},
    },

    created: function() {

        bus.$emit('myEvent',true);
    },

    methods: {
        
    },

    components: {
        player: SinglePlayerComponent
    }
}