var RecipeView = function (container, model) {
    
    var htmlContent = "";
    var dishes = model.getFullMenu();
    var numberOfGuests = model.getNumberOfGuest();
    
    
  
    for (var i = 0; i < dishes.length; i++) {
	htmlContent += "<div class=\"recipe\">";
	htmlContent += "<div class=\"recipe-image recipe-object\"><img class=\"recipe-icon\" src=\"" + dishes[i].image + "\"></div>";
	htmlContent += "<div class=\"recipe-info recipe-object\">";
	htmlContent += "<h2>" + dishes[i].name + "</h2>";
	htmlContent += "<p>" + dishes[i].info + "</p>";
	htmlContent += "</div>";
	htmlContent += "<div class=\"recipe-preperation recipe-object\">"
	htmlContent += "<h2>PREPERATION</h2>"
	htmlContent += "<p>" + dishes[i].description + "</p>"
	htmlContent += "</div>";
	htmlContent += "</div>";
    
}
    container.append(htmlContent);
}
