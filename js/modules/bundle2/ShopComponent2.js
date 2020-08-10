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
            <item v-for="item in items" v-if="item.canBuy" v-on:click.native="attemptPurchase(item)" :item="item" :key="item.ID" class="item" :id="item.itemID"></item>
          </div>
  
          <router-link to="/bundle2" v-on:click.native="routerShow()"">bundle2</router-link>
      </div>
      `,
  
      data: function() {
        return {
          items: [
            {name: "testItem 1", price: "$5", desc: "This is a test description for test item 1", ID: "1", itemID: "item1", canBuy: true},
            {name: "testItem 2", price: "$6.99", desc: "This is a test description for test item 2", ID: "2", itemID: "item2", canBuy: true},
            {name: "testItem 3", price: "$1", desc: "This is a test description for test item 3", ID: "3", itemID: "item3", canBuy: true}
          ],
          
  
          currentItem: {},

        }
      },
  
      created: function() {
        var array1 = [this.items]
          console.log(array1)
          
      },
  
      // Likely not needed, but mounted is for when the page is fully rendered
      // instead of when creation was initiated
      mounted: function() {
          this.test();
  
          this.shopStartText();
          this.hideItems();
          this.itemHover();
  
          $(".bundle2Router").hide()

          this.invenArray = JSON.parse(localStorage.getItem('invenStr'));

          // var check = this.invenArray.filter(function (elm) {
          //   if (elm.ID == '3') {
          //           return elm;
          //      }
          // }); if (check.length > 0) {
          //     this.items[2].canBuy = false
          //   }
      },
  
      methods: {
  
        routerShow() {
          $(".bundle2Router").show();
        },
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
                this.currentItem.canBuy = false

                var walletNew = money -= price;
                $("p.textCon").text("Thanks for the purchase! Your new balance is $" + walletNew);
                $("div#wallet").text("$" + walletNew);
                // localStorage.setItem('wallet', walletNew);

                var existing = localStorage.getItem('invenStr');
                existing = existing ? existing.split(',') : [];
    
                var inventory = [];
    
                inventory.push(info);
    
                var r = JSON.stringify(inventory);
                
                var p = JSON.parse(r);
    
                $("div#inventory").append(`<h2 class="invenItem ${p[0].name} ${p[0].itemID}">${p[0].name}</h2>`);

                this.invenArray.push(info)

                var invenStr = JSON.stringify(this.invenArray)
                localStorage.setItem("invenStr", invenStr);
                
              }
            }.bind(this),0);
  
          }
            
      },
  
      // Component definition
      components: {
        item: ItemComponent
      }
  }