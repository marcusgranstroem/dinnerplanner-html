var ResultView = function (container, model) {
    var updateHTML = function() {
	container.empty();
	var results = "";
	var dishes = model.getSearchedDishes(); //(0,0) to have no filters or types.
	for (var i = 0; i < dishes.length; i++) {
	    results += "<div class=\"dish-object\" id=\"dish-id-" + dishes[i].id + "\">";
	    results += "<img src=\"" + dishes[i].image + "\">";
	    results += "<p class=\"dish-object-text\">" + dishes[i].name +"</p>";
	    results += "</div>";
	}
	container.append(results);
    }
    
    updateHTML();
    
    var update = function(model, changeDetails) {
        switch(changeDetails) {
        case "made_search":
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
