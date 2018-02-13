var CheckoutViewController = function(generalController, view, model) {

    var printFullRecipeBtn = view.getFullRecipeBtn();
    var printFullRecipe = function(evt) {
        generalController.showRecipe();
    }
    printFullRecipeBtn.addEventListener("click", printFullRecipe, false);
}
