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
  content: " <br>Content",
};

var characterShown = false;
$(document).ready(function() {
	$(".item").mousedown(function() {
		console.log("LINK NOT FOUND");
		$(this).html(linkNot);
	});
	$(".item").mouseup(function() {
		console.log("MOUSEUP ON HANDBOOKS");
		console.log(values[this.id]);
    if (this.id == "character" && characterShown)
      $(".content").removeClass("clickedContent")
      $(".content").addClass("hideContent")
      console.log(characterShown);
      characterShown = false;
    if (this.id == "character" && !characterShown)
      $(".content").removeClass("hideContent")
      $(".content").addClass("clickedContent")
      console.log(characterShown);
      characterShown = true;
    $(this).html(values[this.id]);
	});

});
