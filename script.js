// if you want to change something on a DIFFERENT element, you have to call it by name (it's "id")
// https://www.w3schools.com/jsref/met_document_getelementbyid.asp
	
// "el" stands for the "element" that was just clicked
function allOpaque(el){
	document.getElemenetByID("opqcity-pats").classlist.add("opaque");
	document.getElemenetByID("opqcity-rams").classlist.add("opaque");

	
}

// "el" stands for the "element" that was just clicked
function removeColor(el){
	document.getElemenetByID("rams-column").classlist.remove("rams-blue");
	document.getElemenetByID("pats-column").classlist.remove("rams-silver");


	
}

function showTrophy(el){
		document.getElemenetByID("opacity-crams").src="images/lombardi_trophy.png";
		document.getElemenetByID("mid-column").src="images/lombardi_trophy.png";
		document.getElemenetByID("opacity-pats").src="images/lombardi_trophy.png";
		
		
		

}
