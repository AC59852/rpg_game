  // Component Code
  export default {
      // Component HTML using child components
      template: `
      <div class="container">
         <h1>test</h1>
         <router-link to="/bundle1">Bundle 1</router-link>
         <router-link to="/bundle2">Bundle 2</router-link>
      </div>
      `,

      mounted: function() {
          // this.getWallet();
          console.log(inventory)
      },

      methods: {
      }
  }