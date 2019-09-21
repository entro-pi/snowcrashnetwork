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
  inventory: " <br>inventory",
};

function RemoveInventory() {
        $('.inventory').css('display', 'none');
        $('.inventory').css('animation', '.5s 1 twirl');
        $('.inventory').css('webkitAnimationName', 'twirl');
        console.log("WEBKIDEND");
}

function RemoveMap() {
        $('.mapContent').css('display', 'none');
        $('.mapContent').css('animation', '.5s 1 slideopen');
        $('.mapContent').css('webkitAnimationName', 'slideopen');
        console.log("WEBKIDEND");
}

var characterShown = false;
var mapShown = false;
$(document).ready(function() {


  //for all items in the menu
  $('.item').mouseup(function () {
    if (characterShown) {
     $('.inventory').css('webkitAnimationName', 'sink');
      $('.inventory').css('animation', '.25s 1 sink');
      document.addEventListener('webkitAnimationEnd', RemoveInventory, true);
      console.log(characterShown);
      characterShown = false;
      return;
    };

  });

  //Map
  $('#map').mouseup(function() {
    if (mapShown) {
     $('.mapContent').css('webkitAnimationName', 'sink');
      $('.mapContent').css('animation', '.25s 1 sink');
      document.addEventListener('webkitAnimationEnd', RemoveMap, true);
      mapShown = false;
      console.log(characterShown);
      return;
    };
    if (!mapShown) {
      $('.mapContent').css('display', 'block');

      document.removeEventListener('webkitAnimationEnd', RemoveMap, true);
      mapShown = true;
      console.log(characterShown);
    };
  if (characterShown) {
     $('.inventory').css('webkitAnimationName', 'sink');
      $('.inventory').css('animation', '.25s 1 sink');
      document.addEventListener('webkitAnimationEnd', RemoveInventory, true);
      console.log(characterShown);
      characterShown = false;
      return;
    };


  });




  //Character
  $('#character').mouseup(function() {
    if (characterShown) {
     $('.inventory').css('webkitAnimationName', 'sink');
      $('.inventory').css('animation', '.25s 1 sink');
      document.addEventListener('webkitAnimationEnd', RemoveInventory, true);
      characterShown = false;
      console.log(characterShown);
      return;
    };
    if (!characterShown) {
      $('.inventory').css('display', 'grid');

      document.removeEventListener('webkitAnimationEnd', RemoveInventory, true);
      characterShown = true;
      console.log(characterShown);
    };
  });

});
