var IndexViewController = function(generalController, view, model) {
    var startCreateDinnerBtn = view.getStartCreateDinnerBtn();
    var startCreateDinner = function(evt) {
        generalController.showMainPage();
    }
    startCreateDinnerBtn.addEventListener("click", startCreateDinner, false);
}
