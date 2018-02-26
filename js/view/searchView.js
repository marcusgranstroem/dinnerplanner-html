var SearchView = function(container, model) {
    this.getSearchBtn = function() {
        return container.find('#search-button').get(0);
    }

    this.getSelection = function() {
        return container.find('#search-drop').find(":selected").val();
    }

    this.getSearchField = function() {
        return container.find('#search-field').val();
    }

    var update = function(model, changeDetails) {
	switch(changeDetails) {
	case "loading_done":
	    hideLoader();
	    break;
	case "made_search":
	    displayLoader();
	    break;
	default:
	    break;
	}
    }

    var displayLoader = function() {
        container.find('#loader').show();
    }

    var hideLoader = function()  {
        container.find('#loader').hide();
    }

    model.addObserver(update)
    
}
