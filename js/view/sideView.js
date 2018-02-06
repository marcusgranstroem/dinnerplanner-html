var SideView = function(container, model) {
    
    container.find("#collapse-button").click(function() {
	container.find("#total-cost2").toggle();
	container.find("#menu-content").toggle();
    });
}
