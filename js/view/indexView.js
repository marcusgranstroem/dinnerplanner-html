var IndexView = function(container, model) {
    var htmlContent = "";
    var welcomeText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed dictum turpis. Praesent non justo vitae mauris posuere blandit vel id arcu. Aliquam semper quis augue vitae pharetra. Mauris imperdiet ex mattis justo eleifend pharetra.";

    htmlContent += "<p class=\"info-text\">" + welcomeText + "</p>";
    htmlContent += "<button id=\"start-create-dinner-button\" class=\"button button2\">Create new dinner</button>";

    container.append(htmlContent);
}
