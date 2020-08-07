  // Always import before template
import ItemComponent from "./shops/ItemComponent.js";

// Component Code
export default {
    // Component HTML using child components
    template: `
    <div class="container">
        <div class="shopText shopBox"><p class="textCon"></p></div>

        <span id="itemPrice">{{ currentItem.price }}</span>

        <div id="shopItems">
          <item v-for="item in items" v-on:click.native="attemptPurchase(item)" :item="item" :key="item.ID" class="item" :id="item.itemID"></item>
        </div>

        <router-link to="/">home</router-link>
    </div>
    `,

    data: function() {
      return {
        items: [
          {name: "testItem 1", price: "$5", desc: "This is a test description for test item 1", ID: "1", itemID: "item1"},
          {name: "testItem 2", price: "$6.99", desc: "This is a test description for test item 2", ID: "2", itemID: "item2"},
          {name: "testItem 3", price: "$1", desc: "This is a test description for test item 3", ID: "3", itemID: "item3"}
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

        attemptPurchase(info) {
          this.currentItem = info;

          setTimeout(function() {
            var price = $("span#itemPrice").text().replace("$", "");
            var money = $("div#wallet").text().replace("$", "");
            if (+money < +price) {
              $("p.textCon").text("Sorry, you don't have enough for that!");
              console.log(price);
              console.log(money);
  
            } else {
              var walletNew = money -= price;
              $("p.textCon").text("Thanks for the purchase! Your new balance is $" + walletNew);
              $("div#wallet").text("$" + walletNew);
              // localStorage.setItem('wallet', walletNew);
  
              var inventory = [];
  
              inventory.push(info);
  
              var r = JSON.stringify(inventory);
              
              var p = JSON.parse(r);
  
              $("span#inventory").append(`<span class="invenItem ${p[0].name} ${p[0].itemID}"<li>` + p[0].name + `</li><p>${p[0].desc}</p></span>`);
              console.log(inventory);
            }
          }.bind(this),0);

        }
          
    },

    // Component definition
    components: {
      item: ItemComponent
    }
}