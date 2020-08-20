import HomeComponent from "./modules/HomeComponent.js";

import Bundle1Component from "./modules/bundle1/Bundle1Component.js";
import ShopComponent from "./modules/bundle1/ShopComponent.js";
import EnemyComponent from "./modules/bundle1/EnemyComponent.js";

import Bundle2Component from "./modules/bundle2/Bundle2Component.js";
import ShopComponent2 from "./modules/bundle2/ShopComponent2.js";
import EnemyComponent2 from "./modules/bundle2/EnemyComponent2.js";


import playertest from "./modules/player/playertest.js";
Vue.mixin({
    data: function() {
      return {
        players: [
            {name: "player1", ability: "pistol shot", dmg: "15", hp: "100"},
            {name: "player2", ability: "punch", dmg: "25",  hp: "100"},
            {name: "player3", ability: "knife lunge", dmg: "35",  hp: "25"},
        ],
        
        currentPlayer: {name: "player1", ability: "pistol shot", dmg: "15", hp: "100"},

        invenArray: []
      }
    }
  })

// TODO Add a page that tells user that their email was sent
// TODO Allow redirect page to have button that sends back to home or redirect after done reading
// SOLUTION change header in PHP to a route and path it
window.bus = new Vue({});
    // Routing is very basic since this is a one page app,
    // just define default route as home and load component

    let router = new VueRouter({
        routes: [
            { path: '/', name: "home", component: HomeComponent},

            { path: '/bundle1', name: "bundle1", component: Bundle1Component, children: [
                { path: '/bundle1/enemy', name: "enemy", component: EnemyComponent, props: true},
                { path: '/bundle1/shop', name: "shop", component: ShopComponent, props: true},
            ]},

            { path: '/bundle2', name: "bundle2", component: Bundle2Component, children: [
                { path: '/bundle2/enemy', name: "enemy2", component: EnemyComponent2, props: true},
                { path: '/bundle2/shop', name: "shop2", component: ShopComponent2, props: true},
            ]},
        ]
    });

    // Bind a Vue Model to the #app id
    const vm = new Vue({
        
        created: function() {
            var _lsTotal=0,_xLen,_x;for(_x in localStorage){ if(!localStorage.hasOwnProperty(_x)){continue;} _xLen= ((localStorage[_x].length + _x.length)* 2);_lsTotal+=_xLen; console.log(_x.substr(0,50)+" = "+ (_xLen/1024).toFixed(2)+" KB")};console.log("Total = " + (_lsTotal / 1024).toFixed(2) + " KB");

            if (localStorage.getItem('invenStr') === null) {
                localStorage.setItem('invenStr', invenStr)
            } else {
                console.log("already set")
                this.invenArray = JSON.parse(localStorage.getItem('invenStr'));
            }
            
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
            playertest: playertest,
        },
        
        // Router definition
        router: router

    }).$mount("#app");
