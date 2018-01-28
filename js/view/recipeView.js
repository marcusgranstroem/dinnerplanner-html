var RecipeView = function (container, model) {
    var numberOfGuests = 4;
    var guests = document.getElementById("numberOfGuests");
    guests.textContent = numberOfGuests;

  //Generating for static view
  model.addDishToMenu(1);
  model.addDishToMenu(100);
  model.addDishToMenu(201);

  var results = "";
  var dishes = model.getFullMenu();
  for (var i = 0; i < dishes.length; i++) {
    results += "<div class=\"recipe\">";
    results += "<div class=\"recipe-image recipe-object\"><img class=\"recipe-icon\" src=\"" + dishes[i].image + "\"></div>";
    results += "<div class=\"recipe-info recipe-object\">";
    results += "<h2>" + dishes[i].name + "</h2>";
    results += "<p>" + dishes[i].info + "</p>";
    results += "</div>";
    results += "<div class=\"recipe-preperation recipe-object\">"
    results += "<h2>PREPERATION</h2>"
    results += "<p>" + dishes[i].description + "</p>"
    results += "</div>";
    results += "</div>";
  }
  container.append(results);
}
