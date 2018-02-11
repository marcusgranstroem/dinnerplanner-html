$(function() {
    var resultView, recipeView, checkoutView, dishView, sideView, searchView;

    var views = {
	"resultView" : $("#result-container"),
	"recipeView" : $("#recipe-list"),
	"checkoutView" : $("#checkout-items"),
	"dishView" : $("#dish-details"),
	"sideView" : $("#side-bar"),
	"searchView" : $("#search-bar")
		}
    
    //We instantiate our model
    var model = new DinnerModel();

    // Just to show some data
    model.addDishToMenu(1);
    model.addDishToMenu(100);
    model.addDishToMenu(200);
	
    // And create the instance of ResultView
    resultView = new ResultView(views.resultView, model);
    
    recipeView = new RecipeView(views.recipeView, model);
    
    checkoutView = new CheckoutView(views.checkoutView, model);
    
    dishView = new DishView(views.dishView, model);
    
    sideView = new SideView(views.sideView, model);
    
    searchView = new SearchView(views.searchView, model);


    // Initiate our controllers
    var resultViewController = new ResultViewController(resultView, model);
    var recipeViewController = new RecipeViewController(recipeView, model);
    var checkoutViewController = new CheckoutViewController(checkoutView, model);
    var dishViewController = new DishViewController(dishView, model);
    var sideViewController = new SideViewController(sideView, model);
    var searchViewController = new SearchViewController(searchView, model);

    /**
     * IMPORTANT: app.js is the only place where you are allowed to
     * use the $('someSelector') to search for elements in the whole HTML.
     * In other places you should limit the search only to the children 
     * of the specific view you're working with (see exampleView.js).
     */

    var hideAll = function() {
	for (var key in views) {
	    if (views.hasOwnProperty(key)) {
		views.key.hide();
	    }
	}
    }

    // Display "main_page"
    var showMainPage = function() {
	hideAll();
	views.resultView.show();
	views.sideView.show();
	views.searchView.show();
    }

    var showCheckout = function () {
	hideAll();
	views.checkoutView.show();
    }

    var showDish = function () {
	hideAll();
	views.dishView.show();
	views.sideView.show();
    }

    var showIndex = function () {
	hideAll();
	// TODO 
	//views.indexView.show();
    }

    var showRecipe = function () {
	hideAll();
	views.recipeView.show();
    }

});
