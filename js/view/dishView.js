var DishView = function (container, model) {
    var htmlContent = "";



    // This needs a serious cleanup
    htmlContent += "<div id=\"dish-details\" class=\"result-view border-object\">";
    htmlContent += "<div id=\"dish-more\">";
    htmlContent += "<div id=\"dish-description\">";
    htmlContent += "<h2 id=\"dish-name\"></h2>";
    htmlContent += "<img id=\"dish-image\">";
    htmlContent += "<p id=\"dish-info\"></p>";
    htmlContent += "<button id=\"back-to-search\" class=\"button button2 small-button\">Back to search </button>";
    htmlContent += "</div>";
    htmlContent += "<div id=\"ingredients-list\">";
    htmlContent += "<h2 id=\"ingredients-header\" class=\"text-margin-1\"></h2>";
    htmlContent += "<hr>";
    htmlContent += "<!--Add ingredients here-->"; // Should be generated from model
    htmlContent += "<div class=\"ingredient-box\">";
    htmlContent += "<div id=\"ingredient-column-amount\"></div>";
    htmlContent += "<div id=\"ingredient-column-description\"></div>";
    htmlContent += "<div id=\"ingredient-column-currency\"></div>";
    htmlContent += "<div id=\"ingredient-column-price\"></div>";
    htmlContent += "</div>";
    htmlContent += "<hr>";
    htmlContent += "<div id=\"ingredients-total\">";
    htmlContent += "<button id=\"add-to-menu\"class=\"button button2 small-button\">Add to menu";
    htmlContent += "</button>";
    htmlContent += "<p id=\"tot-price\"></p>";
    htmlContent += "</div>";
    htmlContent += "</div>";
    htmlContent += "</div>";
    htmlContent += "<div id=\"dish-preperation\">";
    htmlContent += "<h2>PREPERATION";
    htmlContent += "</h2>";
    htmlContent += "<p id=\"dish-prep\"></p>";
    htmlContent += "</div>";

    container.append(htmlContent);

    this.getAddToMenuBtn = function() {
        return container.find('#add-to-menu').get(0);
    }

    this.getBackToSearchBtn = function() {
        return container.find('#back-to-search').get(0);
    }

    var update = function(model, changeDetails) {
	switch(changeDetails) {
	case "dish_chosen":
	    updateHTML();
	    break;
	case "changed_number_of_guests":
            updateHTML();
	    break;
	}
    }
    model.addObserver(update);

    var updateHTML = function() {
	var currentDish = model.getChosenDish();
	var guests = model.getNumberOfGuests();
	container.find("#dish-name").html(currentDish.name);
	container.find("#dish-image").attr({"src" : currentDish.image, "alt" : currentDish.name});
	container.find("#dish-info").html(currentDish.info);
	container.find("#ingredients-header").html("INGREDIENTS FOR " + guests + " PEOPLE");

	// Generate ingredients for selected dish
	var amount = "";
	var descr = "";
	var currency = "";
	var price = "";
	var totalPrice = 0;
	currentDish.ingredients.forEach(function(ingredient) {
	    var ingredientPrice = ingredient.price * guests;
	    amount += "<p class=\"ingredient-text1\">" + (ingredient.quantity * guests) + " " + ingredient.unit + "</p>";
	    descr += "<p class=\"ingredient-text2\">" + ingredient.name + "</p>";
	    currency += "<p class=\"ingredient-text3\">" + "SEK" + "</p>";
	    price += "<p class=\"ingredient-text4\">" + ingredientPrice + "</p>";
	    totalPrice += ingredientPrice;
	});

	container.find("#ingredient-column-amount").html(amount);
	container.find("#ingredient-column-description").html(descr);
	container.find("#ingredient-column-currency").html(currency);
	container.find("#ingredient-column-price").html(price);
	container.find("#tot-price").html(totalPrice + " SEK");
	container.find("#dish-prep").html(currentDish.description);
    }
}
