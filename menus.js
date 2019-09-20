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




    if (this.id == "character" && characterShown) {

            var premiumContentNodes = $('.content');
      let premiumContent = Array.from(premiumContentNodes);
      premiumContent.forEach(function(event) {
        event.addEventListener( 'webkitAnimationEnd', function(event) { $(this).addClass("hiddenContent"); }, false );
      });
    };
      $(".content").removeClass("clickedContent");
      $(".content").addClass("hideContent");
    characterShown = false;
      console.log(characterShown);

  });


    $(".item").mouseup(function() {


    console.log("MOUSEUP ON HANDBOOKS");
		console.log(values[this.id]);
    if (this.id == "character" && !characterShown) {


      $(".content").removeClass("hideContent hiddenContent")
      $(".content").addClass("clickedContent")
      console.log(characterShown);
      characterShown = true;
    };
    $(this).html(values[this.id]);
	});

});
