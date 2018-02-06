function hideDropdown() {
    var x = document.getElementById("menu-content");
    var totCost = document.getElementById("total-cost2");
    if (x.style.display === "none") {
        x.style.display = "block";
	totCost.style.display = "none";
    } else {
        x.style.display = "none";
	totCost.style.display = "block";
    }
} 
