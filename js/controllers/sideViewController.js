var SideViewController = function(generalController, view, model) {
    var collapseBtn = view.getCollapseBtn();
    var collapse = function(evt) {
        view.collapse();
    }
    collapseBtn.addEventListener("click", collapse, false);

    var confirmBtn = view.getConfirmBtn();
    var confirm = function(evt) {
        if (model.getFullMenu().length == 0) {
            alert('Your menu is empty.');
            return;
        }
        generalController.showCheckout();
    }
    confirmBtn.addEventListener("click", confirm, false);
}
