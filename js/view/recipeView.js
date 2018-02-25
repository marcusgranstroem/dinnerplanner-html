var RecipeView = function(container, model) {

    var updateHTML = function () {
        container.empty();
        var htmlContent = "";
        var dishes = model.getFullMenu();
        for (var i = 0; i < dishes.length; i++) {
            htmlContent += "<div class=\"recipe\">";
            htmlContent += "<div  class=\"recipe-image recipe-object\"><img id=\"dish-image\" class=\"recipe-icon\" src=\"" + dishes[i].image + "\"></div>";
            htmlContent += "<div class=\"recipe-info recipe-object\">";
            htmlContent += "<h2>" + dishes[i].name + "</h2>";
            htmlContent += "<p>" + dishes[i].creditText + "</p>";
            htmlContent += "</div>";
            htmlContent += "<div class=\"recipe-preperation recipe-object\">"
            htmlContent += "<h2>PREPERATION</h2>"
            htmlContent += "<p>" + dishes[i].instructions + "</p>"
            htmlContent += "</div>";
            htmlContent += "</div>";
        }
        container.append(htmlContent);

    }

    updateHTML();

    var update = function(model, changeDetails) {
        switch(changeDetails) {
            case "added_dish_to_menu":
                updateHTML();
                break;
            case "removed_dish_from_menu":
                updateHTML();
                break;
            default:
                break;
        }
    }
    model.addObserver(update);
}
