var ResultViewController = function(generalController, container, model) {
    var dishBtn = container.get(0);
    var dishClick = function(evt) {
        if(evt.target.className != "dish-object")
            return;
        var id = evt.target.id.substring(8); //remove the "dish-id-" part of id
        model.setChosenDish(id);
        generalController.showDish();
    }
    dishBtn.addEventListener("click", dishClick, false);
}
