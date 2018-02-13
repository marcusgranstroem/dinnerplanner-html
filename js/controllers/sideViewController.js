var SideViewController = function(generalController, container, model) {
    var collapseBtn = container.find('#collapse-button').get(0);
    var collapse = function(evt) {
        container.find("#total-cost2").toggle();
    	container.find("#menu-content").toggle();
    }
    collapseBtn.addEventListener("click", collapse, false);

    var confirmBtn = container.find('#confirm-button').get(0);
    var confirm = function(evt) {
        generalController.showCheckout();
    }
    confirmBtn.addEventListener("click", confirm, false);
}
