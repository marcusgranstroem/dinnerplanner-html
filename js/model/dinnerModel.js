//Returns //DinnerModel Object constructor
var DinnerModel = function() {
    //TODO Lab 1 implement the data structure that will hold number of guest
    // and selected dishes for the dinner menu
    //var numberOfGuests = document.getElementById("people-input-field");
    var numberOfGuests = 1;
    var observers = [];
    var menu = [];
    var searchResults = [];
    var chosenDish;
    var mykey = config.API_KEY_SPOONACULAR;

    this.setNumberOfGuests = function(num) {
        numberOfGuests = num;
        this.notifyObservers("changed_number_of_guests");
    }

    this.getNumberOfGuests = function() {
        return numberOfGuests;
    }

    //Returns the dish that is on the menu for selected type
    this.getSelectedDish = function(type) {
        return menu.filter(function(dish) {
            return dish.type == type;
        });
    }

    //Returns all the dishes on the menu.
    this.getFullMenu = function() {
        return menu;
    }

    //Returns all ingredients for all the dishes on the menu.
    this.getAllIngredients = function() {
        var meals = this.getFullMenu();
        var ingredients = [];
        for (var i = 0; i < meals.length; i++) {
            var localIngredients = meals[i].ingredients;
            for (var j = 0; j < localIngredients.length; j++) {
                ingredients.push(localIngredients[j]);
            }
        }
        return ingredients; //Duplicates occur.
    }

    this.getDishPrice = function(id) {
        var ingredientList = this.getDish(id).ingredients;
        var price = 0;
        for (var i = 0; i < ingredientList.length; i++) {
            price +=ingredientList[i].price;
        }
        return price * this.getNumberOfGuests();
    }

    //Returns the total price of the menu (all the ingredients multiplied by number of guests).
    this.getTotalMenuPrice = function() {
        var totalPrice = 0;
        var numberOfGuests = this.getNumberOfGuests();
        this.getAllIngredients().forEach(function(ingredient) {
            totalPrice += ingredient.price * numberOfGuests;
        });
        return totalPrice;
    }

    //Adds the passed dish to the menu. If the dish of that type already exists on the menu
    //it is removed from the menu and the new one added.
    this.addDishToMenu = function(id) {
        var dishToAdd;
        for (var i = 0; i < dishes.length; i++) {
            if (dishes[i].id == id) {
                dishToAdd = dishes[i];
            }
        }

        menu = menu.filter(function(dish) {
            if (dishToAdd.type == dish.type)
                return false;
            return true;
        });
        menu.push(dishToAdd);
        this.notifyObservers("added_dish_to_menu");
    }

    //Removes dish from menu
    this.removeDishFromMenu = function(id) {
        menu = menu.filter(function(dish) {
            if (id == dish.id)
                return false;
            return true;
        });
    }

    //function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
    //you can use the filter argument to filter out the dish by name or ingredient (use for search)
    //if you don't pass any filter all the dishes will be returned
    this.getAllDishes = function(type, filter, callback, errorCallback) {
	if(!type) {
	    type = "";
	}
	else {
	    type = "type=" + type;
	}
	if(!filter) {
	    filter = "";
	}
	else {
	    filter = "query=" + filter;
	}
       $.ajax( {
           method: "GET",
           url: "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?" + type + "&" + filter,
            headers: {
                "X-Mashape-Key": mykey
            },
	   beforeSend: function() {
	       $("#loader").show();
	   },
	   complete: function() {
	       $("#loader").hide();
	   },
            success: function(data) {
		console.log("Successful API connection");
                callback(data);
            },
            error: function(error) {
		console.log("Error API");
                errorCallback(error);
            }
	});
    }

    //function that returns a dish of specific ID
    this.getDish = function(id) {
        for (key in dishes) {
            if (dishes[key].id == id) {
                return dishes[key];
            }
        }
    }

    this.addObserver = function(observer) {
        observers.push(observer);
    }


    this.notifyObservers = function(details) {
        for (var i = 0; i < observers.length; i++)
            observers[i](this, details); // we will make sure that observers[i] is a function, so we can call it like observers[i](parameters)
    }

    this.removeObserver = function(observer) {
        observers = observers.filter(function(currentObserver) {
            currentObserver !== observer;
        });
    }

    // Controller functions
    this.setChosenDish = function(dishID) {
        chosenDish = this.getDish(dishID);
        this.notifyObservers("dish_chosen");
    }

    this.getChosenDish = function() {
        return chosenDish;
    }

    this.makeSearch = function(type, filter) {
	var callback = function(data) {
	    searchResults = data.results;
	    console.log(searchResults);
        this.notifyObservers("made_search");
	}.bind(this)
	// TODO should tell user something better
	var errorCallback = function(error) {
	    console.log(error);
	}
        this.getAllDishes(type, filter, callback, errorCallback);
    }

    this.getSearchedDishes = function() {
        return searchResults;
    }

    // the dishes variable contains an array of all the
    // dishes in the database. each dish has id, name, type,
    // image (images/name of the image fileimages/), description and
    // array of ingredients. Each ingredient has name,
    // quantity (a number), price (a number) and unit (string
    // defining the unit i.e. "g", "slices", "ml". Unit
    // can sometimes be empty like in the example of eggs where
    // you just say "5 eggs" and not "5 pieces of eggs" or anything else.
    var dishes = [{
        'id': 1,
        'name': 'French toast',
        'type': 'starter',
        'image': 'images/toast.jpg',
        'info': "Some text here. That's a tasty looking dish right there. It looks a little cold though, but I can't really place my finger on why.",
        'description': "In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
        'ingredients': [{
            'name': 'eggs',
            'quantity': 0.5,
            'unit': '',
            'price': 10
        }, {
            'name': 'milk',
            'quantity': 30,
            'unit': 'ml',
            'price': 6
        }, {
            'name': 'brown sugar',
            'quantity': 7,
            'unit': 'g',
            'price': 1
        }, {
            'name': 'ground nutmeg',
            'quantity': 0.5,
            'unit': 'g',
            'price': 12
        }, {
            'name': 'white bread',
            'quantity': 2,
            'unit': 'slices',
            'price': 2
        }]
    }, {
        'id': 2,
        'name': 'Sourdough Starter',
        'type': 'starter',
        'image': 'images/sourdough.jpg',
        'info': "Some text here. That's a tasty looking dish right there. It looks a little cold though, but I can't really place my finger on why.",
        'description': "Here is how you make it... Lore ipsum...",
        'ingredients': [{
            'name': 'active dry yeast',
            'quantity': 0.5,
            'unit': 'g',
            'price': 4
        }, {
            'name': 'warm water',
            'quantity': 30,
            'unit': 'ml',
            'price': 0
        }, {
            'name': 'all-purpose flour',
            'quantity': 15,
            'unit': 'g',
            'price': 2
        }]
    }, {
        'id': 3,
        'name': 'Baked Brie with Peaches',
        'type': 'starter',
        'image': 'images/bakedbrie.jpg',
        'info': "Some text here. That's a tasty looking dish right there. It looks a little cold though, but I can't really place my finger on why.",
        'description': "Here is how you make it... Lore ipsum...",
        'ingredients': [{
            'name': 'round Brie cheese',
            'quantity': 10,
            'unit': 'g',
            'price': 8
        }, {
            'name': 'raspberry preserves',
            'quantity': 15,
            'unit': 'g',
            'price': 10
        }, {
            'name': 'peaches',
            'quantity': 1,
            'unit': '',
            'price': 4
        }]
    }, {
        'id': 100,
        'name': 'Meat balls',
        'type': 'main dish',
        'image': 'images/meatballs.jpg',
        'info': "Some text here. That's a tasty looking dish right there. It looks a little cold though, but I can't really place my finger on why.",
        'description': "Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
        'ingredients': [{
            'name': 'extra lean ground beef',
            'quantity': 115,
            'unit': 'g',
            'price': 20
        }, {
            'name': 'sea salt',
            'quantity': 0.7,
            'unit': 'g',
            'price': 3
        }, {
            'name': 'small onion, diced',
            'quantity': 0.25,
            'unit': '',
            'price': 2
        }, {
            'name': 'garlic salt',
            'quantity': 0.7,
            'unit': 'g',
            'price': 2
        }, {
            'name': 'Italian seasoning',
            'quantity': 0.6,
            'unit': 'g',
            'price': 3
        }, {
            'name': 'dried oregano',
            'quantity': 0.3,
            'unit': 'g',
            'price': 3
        }, {
            'name': 'crushed red pepper flakes',
            'quantity': 0.6,
            'unit': 'g',
            'price': 3
        }, {
            'name': 'Worcestershire sauce',
            'quantity': 6,
            'unit': 'ml',
            'price': 7
        }, {
            'name': 'milk',
            'quantity': 20,
            'unit': 'ml',
            'price': 4
        }, {
            'name': 'grated Parmesan cheese',
            'quantity': 5,
            'unit': 'g',
            'price': 8
        }, {
            'name': 'seasoned bread crumbs',
            'quantity': 15,
            'unit': 'g',
            'price': 4
        }]
    }, {
        'id': 101,
        'name': 'MD 2',
        'type': 'main dish',
        'image': 'images/bakedbrie.jpg',
        'info': "Some text here. That's a tasty looking dish right there. It looks a little cold though, but I can't really place my finger on why.",
        'description': "Here is how you make it... Lore ipsum...",
        'ingredients': [{
            'name': 'ingredient 1',
            'quantity': 1,
            'unit': 'pieces',
            'price': 8
        }, {
            'name': 'ingredient 2',
            'quantity': 15,
            'unit': 'g',
            'price': 7
        }, {
            'name': 'ingredient 3',
            'quantity': 10,
            'unit': 'ml',
            'price': 4
        }]
    }, {
        'id': 102,
        'name': 'MD 3',
        'type': 'main dish',
        'image': 'images/meatballs.jpg',
        'info': "Some text here. That's a tasty looking dish right there. It looks a little cold though, but I can't really place my finger on why.",
        'description': "Here is how you make it... Lore ipsum...",
        'ingredients': [{
            'name': 'ingredient 1',
            'quantity': 2,
            'unit': 'pieces',
            'price': 8
        }, {
            'name': 'ingredient 2',
            'quantity': 10,
            'unit': 'g',
            'price': 7
        }, {
            'name': 'ingredient 3',
            'quantity': 5,
            'unit': 'ml',
            'price': 4
        }]
    }, {
        'id': 103,
        'name': 'MD 4',
        'type': 'main dish',
        'image': 'images/meatballs.jpg',
        'info': "Some text here. That's a tasty looking dish right there. It looks a little cold though, but I can't really place my finger on why.",
        'description': "Here is how you make it... Lore ipsum...",
        'ingredients': [{
            'name': 'ingredient 1',
            'quantity': 1,
            'unit': 'pieces',
            'price': 4
        }, {
            'name': 'ingredient 2',
            'quantity': 12,
            'unit': 'g',
            'price': 7
        }, {
            'name': 'ingredient 3',
            'quantity': 6,
            'unit': 'ml',
            'price': 4
        }]
    }, {
        'id': 200,
        'name': 'Chocolat Ice cream',
        'type': 'dessert',
        'image': 'images/icecream.jpg',
        'info': "Some text here. That's a tasty looking dish right there. It looks a little cold though, but I can't really place my finger on why.",
        'description': "Here is how you make it... Lore ipsum...",
        'ingredients': [{
            'name': 'ice cream',
            'quantity': 100,
            'unit': 'ml',
            'price': 6
        }]
    }, {
        'id': 201,
        'name': 'Vanilla Ice cream',
        'type': 'dessert',
        'image': 'images/icecream.jpg',
        'info': "Some text here. That's a tasty looking dish right there. It looks a little cold though, but I can't really place my finger on why.",
        'description': "Here is how you make it... Lore ipsum...",
        'ingredients': [{
            'name': 'ice cream',
            'quantity': 100,
            'unit': 'ml',
            'price': 6
        }]
    }, {
        'id': 202,
        'name': 'Strawberry',
        'type': 'dessert',
        'image': 'images/icecream.jpg',
        'info': "Some text here. That's a tasty looking dish right there. It looks a little cold though, but I can't really place my finger on why.",
        'description': "Here is how you make it... Lore ipsum...",
        'ingredients': [{
            'name': 'ice cream',
            'quantity': 100,
            'unit': 'ml',
            'price': 6
        }]
    }];
}
