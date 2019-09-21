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

  $('#character').click(function() {
    if (characterShown) {
     $('.content').css('webkitAnimationName', 'sink');
      $('.content').css('animation', '.25s 1 sink');
      document.addEventListener('webkitAnimationEnd', function() {
        $('.content').css('display', 'none');
      });
      characterShown = false;
    };
    if (!characterShown) {
      $('.content').css('display', 'grid');
      characterShown = true;
    };

  });

});
