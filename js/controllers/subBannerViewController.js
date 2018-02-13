var SubBannerViewController = function(generalController, view, model) {
    var backAndEditBtn = view.getBackAndEditBtn();
    var backAndEdit = function(evt) {
        generalController.showMainPage();
    }
    backAndEditBtn.addEventListener("click", backAndEdit, false);
}
