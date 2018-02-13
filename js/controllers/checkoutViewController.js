var CheckoutViewController = function(generalController, view, model) {
    var backAndEditBtn = view.getBackAndEditBtn();
    var backAndEdit = function(evt) {
        generalController.showMainPage();
    }
    backAndEditBtn.addEventListener("click", backAndEdit, false);

    var printFullRecipeBtn = view.getFullRecipeBtn();
    var printFullRecipe = function(evt) {
        generalController.showRecipe();
    }
    printFullRecipeBtn.addEventListener("click", printFullRecipe, false);
}
