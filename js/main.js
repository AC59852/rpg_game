import ShopComponent from "./modules/ShopComponent.js";
import HomeComponent from "./modules/HomeComponent.js";
import EnemyComponent from "./modules/EnemyComponent.js";
//import PlayerComponent from "./modules/player/PlayerComponent.js";
import playertest from "./modules/player/playertest.js";

// TODO Add a page that tells user that their email was sent
// TODO Allow redirect page to have button that sends back to home or redirect after done reading
// SOLUTION change header in PHP to a route and path it
window.bus = new Vue({});
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
        
        created: function() {
            console.log("Vue Application Created");
            this.inventoryHover();
            
        },

        mounted: function() {
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

        components: {
            //player: PlayerComponent
            playertest: playertest
        },
        
        // Router definition
        router: router

    }).$mount("#app");
