var CheckoutViewController = function(generalController, container, model) {
    var backAndEditBtn = container.find('#back-and-edit').get(0);
    var backAndEdit = function(evt) {
        generalController.showMainPage();
    }
    backAndEditBtn.addEventListener("click", backAndEdit, false);
}
