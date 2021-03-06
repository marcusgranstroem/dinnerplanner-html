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

    var plusBtn = view.getPlusBtn();
    var plus = function(evt) {
        model.setNumberOfGuests(model.getNumberOfGuests() + 1);
    }
    plusBtn.addEventListener("click", plus, false);

    var minusBtn = view.getMinusBtn();
    var minus = function(evt) {
        var wantToSetTo = model.getNumberOfGuests() - 1;
        if(wantToSetTo < 1){
            alert('Must be positive number of guests.');
            return;
        }
        model.setNumberOfGuests(wantToSetTo);
    }
    minusBtn.addEventListener("click", minus, false);

    var removeBtn = view.getRemoveBtn();
    var removeClick = function(evt) {
        if(evt.target.id != 'remove-dish')
            return;
        var res = false;
        var node = evt.target.parentNode;
        while (node != null) {
            if (node.className == "dish-in-menu") {
                res = true;
                break;
            }
            node = node.parentNode;
        }
        if (!res)
            return;
        var id = node.id.substring(8); //remove the "dish-id-" part of id
        model.removeDishFromMenu(id);
    }
    removeBtn.addEventListener("click", removeClick, false);
}
