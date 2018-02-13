var SearchViewController = function(generalController, container, model) {
    var searchBtn = view.getSearchBtn();
    var search = function(evt) {
        var selection = view.getSelection();
        var filter = view.getSearchField();
        model.makeSearch(selection, filter);
        model.notifyObservers("made_search");
    }
    searchBtn.addEventListener("click", search, false);
}
