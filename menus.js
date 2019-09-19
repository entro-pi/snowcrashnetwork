var linkNot = '' + " <br>LINK NOT FOUND";
var values = {
	character: " <br>Character",
	map: " <br>Map",
	skills: " <br>Skills",
	inventory: " <br>Inventory",
	magic: " <br>Magic",
	cypher: " <br>Cypher",
	chatlog: " <br>Chatlog",
	crash: " <br>Crash",
};


$(document).ready(function() {
	$(".item").mousedown(function() {
		console.log("LINK NOT FOUND");
		$(this).html(linkNot);
	});
	$(".item").mouseup(function() {
		console.log("MOUSEUP ON HANDBOOKS");
		console.log(values[this.id]);
		$(this).html(values[this.id]);
	});

});
