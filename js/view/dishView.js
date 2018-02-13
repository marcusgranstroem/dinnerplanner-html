var DishView = function (container, model) {
    var currentDish = model.getChosenDish();
    var htmlContent = "";

    console.log(currentDish);
    

    // This needs a serious cleanup
    htmlContent += "<div id=\"dish-details\" class=\"result-view border-object\">";
    htmlContent += "<div id=\"dish-more\">";
    htmlContent += "<div id=\"dish-description\">";
    htmlContent += "<h2>" + currentDish.name + "</h2>";
    htmlContent += "<img src=\"" + currentDish.image + "\" alt=\"Lasagne\">";
    htmlContent += "<p>Some text here. That's a tasty looking lasagna right there. It looks a little cold though, but I can't really place my finger on why. </p>";
    htmlContent += "<button id=\"back-to-search\" class=\"button button2 small-button\">back to search </button>";
    htmlContent += "</div>";
    htmlContent += "<div id=\"ingredients-list\">";
    htmlContent += "<h2 class=\"text-margin-1\">INGREDIENTS FOR 3 PEOPLE </h2>";
    htmlContent += "<hr>";
    htmlContent += "<!--Add ingredients here-->"; // Should be generated from model
    htmlContent += "<div class=\"ingredient-box\">";
    htmlContent += "<div class=\"ingredient-column-amount\">";
    htmlContent += "<p class=\"ingredient-text-\">2 tsp </p>";
    htmlContent += "<p class=\"ingredient-text1\">70000 mg </p>";
    htmlContent += "</div>";
    htmlContent += "<div class=\"ingredient-column-description\">";
    htmlContent += "<p class=\"ingredient-text2\">olive oil </p>";
    htmlContent += "<p class=\"ingredient-text2\">fine grain baracuda oil </p>";
    htmlContent += "</div>";
    htmlContent += "<div class=\"ingredient-column-currency\">";
    htmlContent += "<p class=\"ingredient-text3\">SEK </p>";
    htmlContent += "<p class=\"ingredient-text3\">SEK </p>";
    htmlContent += "</div>";
    htmlContent += "<div class=\"ingredient-column-price\">";
    htmlContent += "<p class=\"ingredient-text4\">15.00 </p>";
    htmlContent += "<p class=\"ingredient-text4\">15000.00 </p>";
    htmlContent += "</div>";
    htmlContent += "</div>";
    htmlContent += "<hr>";
    htmlContent += "<div id=\"ingredients-total\">";
    htmlContent += "<a href=\"main_with_dish.html\">";
    htmlContent += "<button id=\"add-to-menu\"class=\"button button2 small-button\">Add to menu";
    htmlContent += "</button>";
    htmlContent += "</a>";
    htmlContent += "<p>SEK 77.20 </p>";
    htmlContent += "</div>";
    htmlContent += "</div>";
    htmlContent += "</div>";
    htmlContent += "<div id=\"dish-preperation\">";
    htmlContent += "<h2>PREPERATION";
    htmlContent += "</h2>";
    htmlContent += "</div>";

    container.append(htmlContent);

    this.getAddToMenuBtn = function() {
        return container.find('#add-to-menu').get(0);
    }

    this.getBackToSearchBtn = function() {
        return container.find('#back-to-search').get(0);
    }
}
