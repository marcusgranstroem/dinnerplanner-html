var CheckoutView = function (container, model) {
    
    var htmlContent = "";
    var totalPrice = 0;
    var numberOfGuests = model.getNumberOfGuests();
    

    htmlContent += "<div class=\"sub-banner\">";
    htmlContent += "<h2 id=\"sub-banner-title\">My Dinner: <span id=\"numberOfGuests\">20</span> people</h2>";
    htmlContent += "<a href=\"main_page.html\" class=\"button button2 small-button\">Go back and edit dinner</a> </div>";
    htmlContent += "<div id=\"checkout-menu\">";
    htmlContent += "<div id=\"checkout-items\">";
    htmlContent += "</div>";
    htmlContent += "</div>";
    htmlContent += "<hr id=\"checkout-line\">";
    htmlContent += "</div>";
    htmlContent += "<div>";
    htmlContent += "<a href=\"recipe_page.html\" class=\"button button2\">Print Full Recipe</a>";
    htmlContent += "</div>";

   
    model.getFullMenu().forEach(function(dish) {
	htmlContent += "<div class=\"checkout-object\">";
	htmlContent += "<div class=\"dish-object\">";
	htmlContent += "<img src=\"" + dish.image + "\">";
	htmlContent += "<p class=\"dish-object-text\">" + dish.name +"</p>";
	htmlContent += "</div>";
	htmlContent += "<p id=\"dish-price-text\">" + model.getDishPrice(dish.id) + " SEK</p>";
	htmlContent += "</div>";
	totalPrice += model.getDishPrice(dish.id);
    });
    htmlContent += "<hr id=\"vertical-line\">";
    htmlContent += "<div id=\"price-tag\"><p id=\"total-price-text\">Total: </p><p id=\"total-price-number\">" + totalPrice + " SEK</p></div>";



    container.append(htmlContent);
}
