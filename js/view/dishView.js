var DishView = function (container, model) {
    this.getAddToMenuBtn = function() {
        return container.find('#add-to-menu').get(0);
    }

    this.getBackToSearchBtn = function() {
        return container.find('#back-to-search').get(0);
    }

    var displayLoader = function() {
        container.children().hide();
        container.find('#loader2').show();
    }

    var hideLoader = function()  {
        container.children().show();
        container.find('#loader2').hide();
    }

    var update = function(model, changeDetails) {
	switch(changeDetails) {
	case "dish_chosen":
            displayLoader();
	    break;
	case "changed_number_of_guests":
            updateHTML();
	case "loading2_done":
            updateHTML();
            hideLoader();
	    break;
	}
    }
    model.addObserver(update);

    var updateHTML = function() {
	container.find("#dish-image").empty(); // Remove old picture because the new loads slow
	var currentDish = model.getChosenDish();
	var guests = model.getNumberOfGuests();
	container.find("#dish-name").html(currentDish.name);
	container.find("#dish-image").attr({"src" : currentDish.image, "alt" : currentDish.name});
	container.find("#dish-info").html(currentDish.creditText);
	container.find("#ingredients-header").html("INGREDIENTS FOR " + guests + " PEOPLE");

	// Generate ingredients for selected dish
	var amount = "";
	var descr = "";
	var currency = "";
	var price = "";
	var totalPrice = 0;
	currentDish.extendedIngredients.forEach(function(ingredient) {
	    // var ingredientPrice = ingredient.price * guests;
	    amount += "<p class=\"ingredient-text1\">" + (ingredient.amount * guests) + " " + ingredient.unit + "</p>";
	    descr += "<p class=\"ingredient-text2\">" + ingredient.name + "</p>";
	    // currency += "<p class=\"ingredient-text3\">" + "SEK" + "</p>";
	    // price += "<p class=\"ingredient-text4\">" + ingredientPrice + "</p>";
	    //  totalPrice += ingredientPrice;
	});

	container.find("#ingredient-column-amount").html(amount);
	container.find("#ingredient-column-description").html(descr);
	//container.find("#ingredient-column-currency").html(currency);
	//container.find("#ingredient-column-price").html(price);
	container.find("#tot-price").html(currentDish.pricePerServing * guests + " SEK");
	container.find("#dish-prep").html(currentDish.instructions);
    }

}
