var SideView = function(container, model) {

    var htmlContent = "";
    htmlContent += "<div id=\"dinner-collapse\" class=\"no-wrap\">";
    htmlContent += "<h2 class=\"text-margin-1\">My dinner</h2>";
    htmlContent += "<button id=\"collapse-button\" class=\"button button2 small-button\">Show</button>";
    htmlContent += "</div>";
    htmlContent += "<div id=\"people-input\" class=\"no-wrap\">";
    htmlContent += "<p id=\"people-text\" class=\"text-margin-1\">People: " + model.getNumberOfGuests() + "</p>";
    htmlContent += "<button id=\"increment-guests-btn\" class=\"button button2 small-button\">+</button>";
    htmlContent += "<button id=\"decrement-guests-btn\" class=\"button button2 small-button\">-</button>";
    htmlContent += "<p id=\"total-cost2\">SEK 0.00</p>";
    htmlContent += "</div>";
    htmlContent += "<div id=\"menu-content\">";
    htmlContent += "<div class=\"dish-banner\">";
    htmlContent += "<p class=\"dish-banner-text\">Dish name </p>";
    htmlContent += "<p class=\"dish-banner-text\">Cost </p>";
    htmlContent += "</div>";
    htmlContent += "<div id=\"dishes-side-view\"></div>";
    htmlContent += "<p id=\"total-cost\">SEK 0.00 </p>";
    htmlContent += "<button id=\"confirm-button\" class=\"button button2 small-button\">Confirm Dinner </button>";
    htmlContent += "</div>";

    this.getCollapseBtn = function() {
        return container.find('#collapse-button').get(0);
    }

    this.collapse = function() {
        container.find("#total-cost2").toggle();
    	container.find("#menu-content").toggle();
    }

    this.getConfirmBtn = function() {
        return container.find('#confirm-button').get(0);
    }

    container.append(htmlContent);

    var update = function(model, changeDetails) {
	switch(changeDetails) {
	case "added_dish_to_menu":
	    updateHTML();
	    break;
    case "changed_number_of_guests":
        updateHTML();
        break;
	}
    }
    model.addObserver(update);

    var updateHTML = function() {
	var totPrice = model.getTotalMenuPrice();
	var menu = model.getFullMenu();
	var guests = model.getNumberOfGuests();

	container.find("#people-text").html("People: " + guests);
	container.find("#total-cost").html("SEK " + totPrice);
	container.find("#total-cost2").html("SEK " + totPrice);

	var dishList = "";
	menu.forEach(function(dish) {
	    dishList += "<div class =\"dish-in-menu\">";
	    dishList += "<p>" + dish.name + "</p>";
	    dishList += "<p>" + model.getDishPrice(dish.id) + "</p>";
	    dishList += "</div>";
	});
	container.find("#dishes-side-view").html(dishList);
    }

    this.getPlusBtn = function() {
        return container.find('#increment-guests-btn').get(0);
    }

    this.getMinusBtn = function() {
        return container.find('#decrement-guests-btn').get(0);
    }
}
