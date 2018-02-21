var ResultView = function (container, model) {
    var updateHTML = function() {
	container.empty();
	var results = "";
	var dishes = model.getSearchedDishes(); //(0,0) to have no filters or types.
	for (var i = 0; i < dishes.length; i++) {
	    console.log(dishes[i].id);
	    results += "<div class=\"dish-object\" id=\"dish-id-" + dishes[i].id + "\">";
	    results += "<img class=\"res-image\" src=\"https://spoonacular.com/recipeImages/" + dishes[i].id + "-240x150.jpg\">";
	    results += "<p class=\"dish-object-text\">" + dishes[i].title +"</p>";
	    results += "</div>";
	}
	container.append(results);
    }

    updateHTML();

    var update = function(model, changeDetails) {
        switch(changeDetails) {
	case "loading1_done":
            updateHTML();
            break;
        default:
            break;
        }
    }
    model.addObserver(update);


    this.getDishBtn = function() {
	return container.get(0);
    }

}
