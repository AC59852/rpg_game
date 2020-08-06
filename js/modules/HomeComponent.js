  // Component Code
  export default {
      // Component HTML using child components
      template: `
      <div class="container">
         <h1>test</h1>
         <router-link to="/shop">shop</router-link>
         <router-link to="/enemy">monster</router-link>
      </div>
      `,

      mounted: function() {
          // this.getWallet();
          console.log(inventory)
      },

      methods: {
        //getWallet() {
            //alert(localStorage.getItem('wallet'));
            //$("div#wallet").html("$" + localStorage.getItem('wallet'));
        //}
      }
  }