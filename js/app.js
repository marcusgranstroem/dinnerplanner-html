$(function() {
    var resultView, recipeView, checkoutView, dishView, sideView, searchView;
    
    //We instantiate our model
    var model = new DinnerModel();

    // Just to show some data
    model.addDishToMenu(1);
    model.addDishToMenu(100);
    model.addDishToMenu(200);
	
    // And create the instance of ResultView
    if ($("#result-container").length) {
	resultView = new ResultView($("#result-container"), model);
    }

    if($("#recipe-list").length) {
	recipeView = new RecipeView($("#recipe-list"), model);
    }

    if($("#checkout-items").length) {
	checkoutView = new CheckoutView($("#checkout-items"), model);
    }

    if($("#dish-details").length) {
	dishView = new DishView($("#dish-details"), model);
    }

    if($("#side-bar").length) {
	sideView = new SideView($("#side-bar"), model);
    }
    
    if($("#search-bar").length) {
	searchView = new SearchView($("#search-bar"), model);
    }

    /**
     * IMPORTANT: app.js is the only place where you are allowed to
     * use the $('someSelector') to search for elements in the whole HTML.
     * In other places you should limit the search only to the children 
     * of the specific view you're working with (see exampleView.js).
     */

});
