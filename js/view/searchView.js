var SearchView = function(container, model) {
    var htmlContent = "";

    htmlContent += "<div id=\"search-bar\" class=\"border-object\">";
    htmlContent += "<h2 class=\"small-text\">Find a dish </h2>";
    htmlContent += "<div class=\"no-wrap\">";
    htmlContent += "<input type=\"text\" id=\"search-field\" placeholder=\"Enter key words\">";
    htmlContent += "<select id=\"search-drop\">";
    htmlContent += "<option value=\"all\">All </option>";
    htmlContent += "<option value=\"main_course\">Main Course </option>";
    htmlContent += "<option value=\"side_dish\">Side Dish </option>";
    htmlContent += "<option value=\"dessert\">Dessert </option>";
    htmlContent += "<option value=\"appetizer\">Appetizer </option>";
    htmlContent += "</select>";
    htmlContent += "<button class=\"button button2 small-button\">Search </button>";
    htmlContent += "</div>";
    htmlContent += "</div>";

    container.append(htmlContent);
}
