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
	    break;
	case "loading2_succesful":
            updateHTML();
	    break;
	case "api_error2":
	    displayError();
	    break;
	case "loading_done":
            hideLoader();
	    break;
	default:
	    break;
	}
    }
    model.addObserver(update);

    var displayError = function() {
	container.find("#error-text").html("An error has occurred, please try again.");
	container.find("#dish-image").removeAttr("src");
	container.find("#dish-image").removeAttr("alt");
	container.find("#dish-image").empty(); // Remove old picture because the new loads slow
	container.find("#dish-name").empty();
	container.find("#dish-image").empty();
	container.find("#dish-info").empty();

	container.find("#ingredients-header").empty();
	container.find("#ingredient-column-amount").empty();
	container.find("#ingredient-column-description").empty();
	container.find("#tot-price").empty();
	container.find("#dish-prep").empty();
    }

    var updateHTML = function() {
	container.find("#error-text").empty();
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
	    amount += "<p class=\"ingredient-text1\">" + (ingredient.amount * guests) + " " + ingredient.unit + "</p>";
	    descr += "<p class=\"ingredient-text2\">" + ingredient.name + "</p>";
	});

	container.find("#ingredient-column-amount").html(amount);
	container.find("#ingredient-column-description").html(descr);
	container.find("#tot-price").html(currentDish.pricePerServing * guests + " SEK");
	container.find("#dish-prep").html(currentDish.instructions);
    }

}
