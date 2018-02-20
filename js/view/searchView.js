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
    
}
