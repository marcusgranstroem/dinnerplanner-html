var SearchView = function(container, model) {
    var htmlContent = "";

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
    htmlContent += "<button id=\"search-button\"class=\"button button2 small-button\">Search </button>";
    htmlContent += "</div>";

    container.append(htmlContent);

    this.getSearchBtn = function() {
        return container.find('#search-button').get(0);
    }

    this.getSelection = function() {
        return container.find('#search-drop').find(":selected").val();
    }

    this.getSearchField = function() {
        return container.find('#search-field').val();
    }

}
