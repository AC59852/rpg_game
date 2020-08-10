  // Component Code
  export default {
    // Component HTML using child components
    template: `
    <div class="container">
      <router-view :key="$route.fullPath"></router-view>
       <router-link class="bundle2Router" to="/bundle2/shop">shop</router-link>
       <router-link class="bundle2Router" to="/bundle2/enemy">monster</router-link>
       <router-link class="bundle1Router" to="/bundle1">bundle1</router-link>
    </div>
    `,

    created: function() {
    },

    mounted: function() {
        console.log(inventory)
    },

    methods: {
    }
}