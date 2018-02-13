var SearchViewController = function(generalController, view, model) {
    var searchBtn = view.getSearchBtn();
    var search = function(evt) {
        var selection = view.getSelection();
        var filter = view.getSearchField();
        console.log(selection);
        console.log(filter);
        model.makeSearch(selection, filter);
        model.notifyObservers("made_search");
    }
    searchBtn.addEventListener("click", search, false);
}
