var CheckoutView = function (container, model) {

    var htmlContent = "";

    htmlContent += "<div id=\"checkout-menu\">";
    htmlContent += "<div id=\"checkout-items\">";
    htmlContent += "</div>";
    htmlContent += "</div>";
    htmlContent += "<hr id=\"checkout-line\">";
    htmlContent += "</div>";
    htmlContent += "<div>";
    htmlContent += "<button id=\"print-full-recipe\" class=\"button button2\">Print Full Recipe</button>";
    htmlContent += "</div>";
    
    container.append(htmlContent);
    
    var updateHTML = function() {
        container.find('#checkout-items').empty();
        var htmlContent = "";
	
        var totalPrice = 0;
	
        // Generate content from model
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
	
        container.find("#checkout-items").append(htmlContent);
    }

    updateHTML();

    var update = function(model, changeDetails) {
        switch(changeDetails) {
            case "added_dish_to_menu":
                updateHTML();
                break;
            case "changed_number_of_guests":
                updateHTML();
                break;
            default:
                break;
        }
    }
    model.addObserver(update);

    this.getFullRecipeBtn = function() {
        return container.find('#print-full-recipe').get(0);
    }
}
