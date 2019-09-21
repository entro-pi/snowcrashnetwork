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

function RemoveContent() {
        $('.content').css('display', 'none');
        $('.content').css('animation', '.5s 1 twirl');
        $('.content').css('webkitAnimationName', 'twirl');
        console.log("WEBKIDEND");
}

var characterShown = false;
$(document).ready(function() {

  $('.item').mouseup(function () {
    if (characterShown) {
     $('.content').css('webkitAnimationName', 'sink');
      $('.content').css('animation', '.25s 1 sink');
      document.addEventListener('webkitAnimationEnd', RemoveContent, true);
      console.log(characterShown);
      characterShown = false;
      return;
    };

  });

  $('#character').mouseup(function() {
    if (characterShown) {
     $('.content').css('webkitAnimationName', 'sink');
      $('.content').css('animation', '.25s 1 sink');
      document.addEventListener('webkitAnimationEnd', RemoveContent, true);
      characterShown = false;
      console.log(characterShown);
      return;
    };
    if (!characterShown) {
      $('.content').css('display', 'grid');

      document.removeEventListener('webkitAnimationEnd', RemoveContent, true);
      characterShown = true;
      console.log(characterShown);
    };
  });

});
