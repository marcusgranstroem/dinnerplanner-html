var ResultViewController = function(generalController, view, model) {

    var dishBtn = view.getDishBtn();
    var dishClick = function(evt) {
        var res = false;
            var node = evt.target.parentNode;
            while (node != null) {
                if (node.className == "dish-object") {
                    res = true;
                    break;
                }
                node = node.parentNode;
            }
        if (!res)
            return;
        var id = node.id.substring(8); //remove the "dish-id-" part of id
        model.setChosenDish(id);
        generalController.showDish();
    }
    dishBtn.addEventListener("click", dishClick, false);
}
