var SideView = function(container, model) {

     
    var content = "People: " + model.getNumberOfGuests();
    container.find("#people-text").html(content);

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
