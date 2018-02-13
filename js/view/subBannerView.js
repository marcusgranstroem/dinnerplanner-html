var subBannerView = function(container, model) {
    var htmlContent = "";

    htmlContent += "<div id=\"checkout-container\">";
    htmlContent += "<div class=\"sub-banner\">";
    htmlContent += "<h2 id=\"sub-banner-title\">My Dinner: ";
    htmlContent += "<span id=\"numberOfGuests\">" + model.getNumberOfGuests();
    htmlContent += "</span> people";
    htmlContent += "</h2>";
    htmlContent += "<button id=\"back-and-edit\" class=\"button button2 small-button\">Go back and edit dinner</button>";
    htmlContent += "</div>";

    container.append(htmlContent);

    var update = function(model, changeDetails) {
        switch(changeDetails) {
            case "changed_number_of_guests":
                container.find('#numberOfGuests').html(model.getNumberOfGuests());
                break;
            default:
                break;
        }
    }
    model.addObserver(update);

    this.getBackAndEditBtn = function() {
        return container.find('#back-and-edit').get(0);
    }

}
