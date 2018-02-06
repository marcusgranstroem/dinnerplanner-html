var ResultView = function (container, model) {
	var results = "";
	var dishes = model.getAllDishes(0,0); //(0,0) to have no filters or types.
	for (var i = 0; i < dishes.length; i++) {
		results += "<a href=\"dish_page.html\">";
		results += "<div class=\"dish-object\">";
		results += "<img src=\"" + dishes[i].image + "\">";
		results += "<p class=\"dish-object-text\">" + dishes[i].name +"</p>";
		results += "</div></a>";
	}
	container.append(results);
}
