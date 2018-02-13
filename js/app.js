$(function() {
    var resultView, recipeView, checkoutView, dishView, sideView, searchView;

    var views = {
        "resultView": $("#result-view"),
        "recipeView": $("#recipe-view"),
        "checkoutView": $("#checkout-view"),
        "dishView": $("#dish-view"),
        "sideView": $("#side-view"),
        "searchView": $("#search-view"),
        "indexView": $("#welcome-view"),
        "subBannerView": $("#sub-banner-view")
    }

    //We instantiate our model
    var model = new DinnerModel();

    model.setChosenDish(1); // Set some state for the dishView
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

    indexView = new IndexView(views.indexView, model);

    //subBannerView = new IndexView(views.subBannerView, model);


    // Initiate our controllers
    var resultViewController = new ResultViewController(this, resultView, model);
    //var recipeViewController = new RecipeViewController(this, recipeView, model);
    var checkoutViewController = new CheckoutViewController(this, checkoutView, model);
    //var dishViewController = new DishViewController(this, dishView, model);
    var sideViewController = new SideViewController(this, sideView, model);
    //var searchViewController = new SearchViewController(this, searchView, model);
    var indexViewController = new IndexViewController(this, indexView, model);


    /**
     * IMPORTANT: app.js is the only place where you are allowed to
     * use the $('someSelector') to search for elements in the whole HTML.
     * In other places you should limit the search only to the children
     * of the specific view you're working with (see exampleView.js).
     */

    var hideAll = function() {
        for (var key in views) {
            if (views.hasOwnProperty(key)) {
                views[key].hide();
            }
        }
    }

    // Display "main_page"
    this.showMainPage = function() {
        hideAll();
        views.resultView.show();
        views.sideView.show();
        views.searchView.show();
    }

    this.showCheckout = function() {
        hideAll();
        views.checkoutView.show();
    }

    this.showDish = function() {
        hideAll();
        views.dishView.show();
        views.sideView.show();
    }


    this.showRecipe = function() {
        hideAll();
        views.recipeView.show();
    }

    this.showIndex = function() {
	hideAll();
	views.indexView.show();
    }

    this.showMainPage();

});
