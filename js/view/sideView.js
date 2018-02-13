var SideView = function(container, model) {

    var htmlContent = "";
    htmlContent += "<div id=\"dinner-collapse\" class=\"no-wrap\">";
    htmlContent += "<h2 class=\"text-margin-1\">My dinner</h2>";
    htmlContent += "<button id=\"collapse-button\" class=\"button button2 small-button\">Show</button>";
    htmlContent += "</div>";
    htmlContent += "<div id=\"people-input\" class=\"no-wrap\">";
    htmlContent += "<p id=\"people-text\" class=\"text-margin-1\"></p>";
    htmlContent += "<p id=\"total-cost2\">SEK 0.00</p>";
    htmlContent += "</div>";
    htmlContent += "<div id=\"menu-content\">";
    htmlContent += "<div class=\"dish-banner\">";
    htmlContent += "<p class=\"dish-banner-text\">Dish name </p>";
    htmlContent += "<p class=\"dish-banner-text\">Cost </p>";
    htmlContent += "</div>";
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
        return container.find('#confirm-button').get(0)
    }

    container.append(htmlContent);

    var update = function(model, changeDetails) {
	switch(changeDetails) {
	case "added_dish_to_menu":
	    updateHTML();
	}
    }
    
    var updateHTML = function() {
	var totPrice = model.getTotalMenuPrice();
	var guests = model.getNumberOfGuests();

	container.find("#total-cost").html("SEK " + totPrice);
	container.find("#total-cost2").html("SEK " + totPrice);
	
    }
    


}
