export default {
    template: `
    <div class="container">
        <section id="intro">
            <div class="characters">
                <img src="assets/male.png">
                <img src="assets/female.png">
            </div>
        </section>
    </div>
    `,

    created: function() {
        console.log("intro fired");
    },

    mounted: function() {
        var imageUrl = 'assets/office.webp';
        $("#app").css('background-image', 'url(' + imageUrl + ')');

        document.querySelector("#textbox").addEventListener("click", this.introText());
    },

    methods: {
        introText() {
            $("h2#textbox_name").text("Austin Caron");
            var inputCount = 0;
              $("div#textbox").click(function () {
                var functionsArray = [function () {
                    $('p#textbox_text').text("this is replacement text1");
                }, function () {
                    $('p#textbox_text').text("this is replacement text2");
                }, function () {
                    $("h2#textbox_name").text("Lorem Dolor")
                    $('p#textbox_text').text("this is replacement text3");
                }];
                functionsArray[inputCount++]();
              })
        }
    }
}