var DishView = function (container, model) {
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
