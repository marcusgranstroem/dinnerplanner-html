var DishViewController = function(generalController, view, model) {
    var addToMenuBtn = view.getAddToMenuBtn();
    var addToMenu = function(evt) {
        model.addDishToMenu(model.getChosenDish().id);
        model.notifyObservers("added_dish_to_menu");
        generalController.showMainPage();
    }
    addToMenuBtn.addEventListener("click", addToMenu, false);

    var backToSearchBtn = view.getBackToSearchBtn();
    var backToSearch = function(evt) {
        generalController.showMainPage();
    }
    backToSearchBtn.addEventListener("click", backToSearch, false);
}
