var ResultView = function (container, model) {
    var updateHTML = function() {
	var innerContainer = container.find("#inner-result-view");
	innerContainer.empty();
	var results = "";
	var dishes = model.getSearchedDishes(); //(0,0) to have no filters or types.
	for (var i = 0; i < dishes.length; i++) {
	    console.log(dishes[i].id);
	    results += "<div class=\"dish-object\" id=\"dish-id-" + dishes[i].id + "\">";
	    results += "<img class=\"res-image\" src=\"https://spoonacular.com/recipeImages/" + dishes[i].id + "-240x150.jpg\">";
	    results += "<p class=\"dish-object-text\">" + dishes[i].title +"</p>";
	    results += "</div>";
	}
	innerContainer.append(results);
    }

    updateHTML();

    var displayError = function() {
	var innerContainer = container.find("#inner-result-view");
	innerContainer.empty();
	var results = "<p id=\"error-text\">An error occurred, please try again.";
	innerContainer.append(results);
    }
    
    var update = function(model, changeDetails) {
        switch(changeDetails) {
	case "loading1_succesful":
            updateHTML();
            break;
	case "api_error1":
            displayError();
            break;
        default:
            break;
        }
    }
    model.addObserver(update);


    this.getDishBtn = function() {
	return container.get(0);
    }

    this.getMoreBtn = function() {
	return container.find("#more-button").get(0);
    }

}
