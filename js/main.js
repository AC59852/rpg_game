import ShopComponent from "./modules/ShopComponent.js";
import HomeComponent from "./modules/HomeComponent.js";

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
        ]
    });

    // Bind a Vue Model to the #app id
    const vm = new Vue({
        
        created: function() {
            console.log("Vue Application Created");
        },

        // Might not be needed, this is for defining functions inside Vue
        methods: {
            // Most JS functions are ran independently of the main VM
            // and therefore are ran inside of component
        },
        
        // Router definition
        router: router

    }).$mount("#app");

})();