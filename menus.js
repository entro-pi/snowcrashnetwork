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

  const AudioContext = window.AudioContext;
  const audioCtx = new AudioContext();

  const audioElement = document.querySelector('audio');
  const flap = audioCtx.createMediaElementSource(audioElement);




  var animated = document.querySelectorAll('.content');
  animated.forEach(function(item) {
    item.onanimationend = () => {
    console.log(item.className);
    if (item.className == 'content clickedContent hideContent') {
      console.log('Animation over');
        console.log(item);
        item.className = 'content clickedContent hideContent hiddenContent';
      };
  };
  });

  $(".item").mousedown(function() {
		console.log("LINK NOT FOUND");
		$(this).html(linkNot);

    if (this.id == "character" && characterShown)
      $(".content").removeClass("clickedContent")
      $(".content").addClass("hideContent")
      console.log(characterShown);
      characterShown = false;
  });
	$(".item").mouseup(function() {
		console.log("MOUSEUP ON HANDBOOKS");
		console.log(values[this.id]);
    if (this.id == "character" && !characterShown)
      $(".content").removeClass("hideContent hiddenContent")
      $(".content").addClass("clickedContent")
      console.log(characterShown);
      characterShown = true;

    $(this).html(values[this.id]);
	});

});
