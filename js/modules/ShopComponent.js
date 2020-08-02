  // Always import before template
import ItemComponent from "./shops/ItemComponent.js";

// Component Code
export default {
    // Component HTML using child components
    template: `
    <div class="container">
        <div class="shopText shopBox"><p class="textCon"></p></div>

        <div class="shopBox shopBuy"><p>So you're looking to buy {{ currentItem.name }}? That'll be <span id="itemPrice">{{ currentItem.price }}</span></p></div>

        <div class="shopBox shopBought"><p id="shopBoughtText"></p></div>

        <div class="shopBtn shopBuyBtn" v-on:click="attemptPurchase()">Yes</div>
        <div class="shopBtn shopNoBuyBtn"><span>No</span></div>

        <div id="shopItems">
          <item v-for="item in items" v-on:click.native="newInfo(item)" :item="item" :key="item.ID" class="item" :class="item.ID"></item>
        </div>

        <router-link to="/">home</router-link>
    </div>
    `,

    data: function() {
      return {
        items: [
          {name: "testItem 1", price: "$5", desc: "This is a test description for test item 1", ID: "1"},
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
          $("div.shopBought").hide();
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
          $("div.shopBought").hide();
        },

        attemptPurchase() {
          var price = $("span#itemPrice").text().replace("$", "");
          var money = $("div#wallet").text().replace("$", "");

          if (+money < +price) {
            $("p#shopBoughtText").text("Sorry, you don't have enough for that!");
            console.log(price);
            console.log(money);

            $("div.shopBought").show();
            $("div.shopBuy").hide();

          } else {
            var walletNew = money -= price;
            $("p#shopBoughtText").text("Thanks for the purchase! Your new balance is $" + walletNew);
            $("div#wallet").text("$" + walletNew);
            // localStorage.setItem('wallet', walletNew);

            $("div.shopBought").show();
            $("div.shopBuy").hide();
          }
        }
          
    },

    // Component definition
    components: {
      item: ItemComponent
    }
}