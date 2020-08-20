import EnemyTestComponent from "./EnemyTestComponent.js";

  // Component Code
  export default {
    // Component HTML using child components
    template: `
    <div class="container">
       <enemy></enemy>
       <router-link to="/bundle1/shop"><div id="text"><h1>Your Journey was Safe</h1></div></router-link>
    </div>
    `,

    mounted: function() {
      $(".bundle1Router").hide();
    },

    methods: {
    },

    components: {
        enemy: EnemyTestComponent,
    }
}