function goToSection(anchor_id){
	// Find the anchor to scroll to
	var anchor_tag = $("a[name='"+ anchor_id +"']");
	// Scroll to the anchor
	$('html,body').animate({scrollTop: anchor_tag.offset().top},800);
	// Remove the active css from the previous section
	$(document.getElementById("navbar").getElementsByClassName("active")).removeClass("active");
	// Add the active css to the new section
	$("li[name='menu_"+ anchor_id +"']").addClass("active")
	// Update the URL
	location.hash = anchor_id;
}