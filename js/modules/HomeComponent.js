  // Always import before template
import ItemComponent from "./shops/ItemComponent.js";

// Component Code
export default {
    // Component HTML using child components
    template: `
    <div class="container">
        <div class="shopText shopBox"><p class="textCon"></p></div>

        <div class="shopBox shopBuy"><p>So you're looking to buy {{ currentItem.name }}? That'll be {{ currentItem.price }}</p></div>

        <div id="shopItems">
          <item v-for="item in items" v-on:click.native="newInfo(item)" :item="item" :key="item.ID" class="item" :class="item.ID"></item>
        </div>
    </div>
    `,

    data: function() {
      return {
        items: [
          {name: "testItem 1", price: "$5.99", desc: "This is a test description for test item 1", ID: "1"},
          {name: "testItem 2", price: "$6.99", desc: "This is a test description for test item 2", ID: "2"}
        ],

        currentItem: {}
      }
    },

    created: function() {
        // Log that the page was indeed created
        console.log("Home Component Created");
    },

    // Likely not needed, but mounted is for when the page is fully rendered
    // instead of when creation was initiated
    mounted: function() {
        this.test();

        this.shopStartText();
        this.hideItems();
        this.itemHover();
    },

    methods: {
        test() {
            var inputCount = 0;
            $("div.shopText").click(function () {
              $('div.shopText').css('cursor', 'pointer');
              var functionsArray = [function () {
                $("p.textCon").text("Please check out what I have.");
              }, function () {
                $("p.textCon").text("Or just ask me about anything!");
              }, function () {
                $('div.shopText').css('cursor', 'default');
                $("p.textCon").text("Enjoy!");

                $("div#shopItems").show();
              }];
              functionsArray[inputCount++]();
            })
          },

        shopStartText() {
              $("p.textCon").text("Thanks for stopping by the shop");
            },

        hideItems() {
          $("div#shopItems").hide();
          $("div.shopBuy").hide();
        },

        itemHover() {
          var tooltips = document.querySelectorAll('.item p');

          window.onmousemove = function (e) {
            var x = (e.clientX + 5) + 'px',
                y = (e.clientY + 5) + 'px';
            for (var i = 0; i < tooltips.length; i++) {
                tooltips[i].style.top = y;
                tooltips[i].style.left = x;
            }
        };
        },

        newInfo(info) {
          this.currentItem = info;

          $("div.shopText").hide();
          $("div.shopBuy").show();
        }
          
    },

    // Component definition
    components: {
      item: ItemComponent
    }
}