var IndexViewController = function(generalController, container, model) {
    var startCreateDinnerBtn = view.getStartCreateDinnerBtn();
    var startCreateDinner = function(evt) {
        generalController.showMainPage();
    }
    startCreateDinnerBtn.addEventListener("click", startCreateDinner, false);
}
