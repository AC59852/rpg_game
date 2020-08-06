import EnemyTestComponent from "./EnemyTestComponent.js";
import PlayerComponent from "./player/PlayerComponent.js";

  // Component Code
  export default {
    // Component HTML using child components
    template: `
    <div class="container">
       <enemy></enemy>
       <router-link to="/shop"><div id="text"><h1>Your Journey was Safe</h1></div></router-link>
    </div>
    `,

    mounted: function() {
        // this.getWallet();
    },

    methods: {
      newAbil(info) {
        this.currentPlayer = info;
      }
    },

    components: {
        enemy: EnemyTestComponent,
        player: PlayerComponent
    }
}