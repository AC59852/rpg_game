import ShopComponent from "./modules/ShopComponent.js";
import HomeComponent from "./modules/HomeComponent.js";
import EnemyComponent from "./modules/EnemyComponent.js";


Vue.component('player', {
    props: {
        name: String,
        ability: String,
        dmg: String
    },

    template: `
    <div>
        <h2 class="playerName">{{ name }}</h2>
        <h3>{{ ability }}</h3>
        <h3>{{ dmg }}</h3>
    </div>
    `
}),

// TODO Add a page that tells user that their email was sent
// TODO Allow redirect page to have button that sends back to home or redirect after done reading

// SOLUTION change header in PHP to a route and path it

(() => {
    // Routing is very basic since this is a one page app,
    // just define default route as home and load component

    let router = new VueRouter({
        routes: [
            { path: '/', name: "home", component: HomeComponent},
            { path: '/shop', name: "shop", component: ShopComponent},
            { path: '/enemy', name: "enemy", component: EnemyComponent},
        ]
    });

    // Bind a Vue Model to the #app id
    const vm = new Vue({

        data: {
            players: [
                {name: "player1", ability: "pistol shot", dmg: "15"},
                {name: "player2", ability: "punch", dmg: "25"},
                {name: "player3", ability: "knife lunge", dmg: "35"},
            ],
            currentPlayer: {},

            inventory: []
        },
        
        created: function() {
            console.log("Vue Application Created");

            this.inventoryHover();
        },

        // Might not be needed, this is for defining functions inside Vue
        methods: {
            newAbil(info) {
                this.currentPlayer = info;
            },

            inventoryHover() {
                var invenTool = document.querySelectorAll('.invenItem p');
      
                window.onmousemove = function (e) {
                  var x = (e.clientX + 5) + 'px',
                      y = (e.clientY + 5) + 'px';
                  for (var i = 0; i < invenTool.length; i++) {
                      invenTool[i].style.top = y;
                      invenTool[i].style.left = x;
                  }
              }
            }
        },
        
        // Router definition
        router: router

    }).$mount("#app");

})();