var CheckoutView = function (container, model) {
    
    var results = "";
    var totalPrice = 0;
    model.getFullMenu().forEach(function(dish) {
	results += "<div class=\"checkout-object\">";
	results += "<div class=\"dish-object\">";
	results += "<img src=\"" + dish.image + "\">";
	results += "<p class=\"dish-object-text\">" + dish.name +"</p>";
	results += "</div>";
	results += "<p id=\"dish-price-text\">" + model.getDishPrice(dish.id) + " SEK</p>";
	results += "</div>";
	totalPrice += model.getDishPrice(dish.id);
    });
    results += "<hr id=\"vertical-line\">";
    results += "<div id=\"price-tag\"><p id=\"total-price-text\">Total: </p><p id=\"total-price-number\">" + totalPrice + " SEK</p></div>";
    container.append(results);
}
