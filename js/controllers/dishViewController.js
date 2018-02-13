var DishViewController = function(generalController, container, model) {
    var addToMenuBtn = container.find('#add-to-menu').get(0);
    var addToMenu = function(evt) {
        model.addDishToMenu(model.getChosenDish());
        generalController.showMainPage();
    }
    addToMenuBtn.addEventListener("click", addToMenu, false);

    var backToSearchBtn = container.find('#back-to-search').get(0);
    var backToSearch = function(evt) {
        generalController.showMainPage();
    }
    backToSearchBtn.addEventListener("click", backToSearch, false);
}
