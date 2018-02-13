var ResultView = function (container, model) {
	var results = "";
	var dishes = model.getAllDishes(0,0); //(0,0) to have no filters or types.
	for (var i = 0; i < dishes.length; i++) {
		results += "<div class=\"dish-object\" id=\"dish-id-" + dishes[i].id + "\">";
		results += "<img src=\"" + dishes[i].image + "\">";
		results += "<p class=\"dish-object-text\">" + dishes[i].name +"</p>";
		results += "</div>";
	}
	container.append(results);
}
