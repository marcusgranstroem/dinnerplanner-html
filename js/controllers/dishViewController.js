var DishViewController = function(generalController, view, model) {
    var addToMenuBtn = view.getAddToMenuBtn();
    var addToMenu = function(evt) {
        model.addDishToMenu();
        generalController.showMainPage();
    }
    addToMenuBtn.addEventListener("click", addToMenu, false);

    var backToSearchBtn = view.getBackToSearchBtn();
    var backToSearch = function(evt) {
        generalController.showMainPage();
    }
    backToSearchBtn.addEventListener("click", backToSearch, false);
}
