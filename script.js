// variables
var racquet = 0;
var spin = 0;
var power = 0;
var control = 0;
var feel = 0;
var touch = 0;
var comfort = 0;
var longevity = 0;

// strings


function start() {
	document.getElementById("intro").style.visibility = "hidden";  
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropFunc() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function getRacquet(num) {
	racquet = num;

	document.getElementById("playingStyle").classList.remove('hidden');
	//document.getElementById("downfall").classList.remove('hidden');
	document.getElementById("playingStyle").classList.toggle('show');
	//document.getElementById("downfall").classList.toggle('show');

	switch (racquet) {
		case 0:
		break;
		case 1:
		break;
		case 2:
		break;
		case 3:
		break;
		case 4:
		break;
		case 5:
		break;
		default:
		break;
	}

}

function styleOfPlay(style) {
	switch (style) {
		case 0: // agressive, offensive player
			power = power + 60;
			break;
		case 1: // consistent player with long rallies
			spin = spin + 80;
			control = control + 60;
			break;
		case 2: // all around player
		break;
		case 3: // not sure about TYPE OF PLAYER
		break;
		case 4: // hits ball too long
			// needs control
			control = control + 100;
			// spin as well
			spin = spin + 60;
			break;
		case 5: // not deep enough
			// needs spin
			spin = spin + 100;
		break;
		case 6: // can't hit targets
			// needs control
			control = control + 100;
		break;
		case 7: // not sure about downfall
		break;
		case 8: // arm uncomfortable
			// needs comfort
			comfort = comfort + 100;
		break;
		case 9: // arm comfortable
			comfort = comfort + 10;
		break;
		case 10: // unsure about arm
		break;
		case 11: // breaks strings a lot
			longevity = longevity + 100;
			break;
		case 12: // does not break strings
			longevity = longevity + 10;
			break;
		case 13: // unsure about strings
		break;
		case 14: // volleys a lot
			// needs touch
			touch = touch + 100;
			break;
		case 15: // does not volley a lot
			touch = touch + 10;
			break;
		case 16: // unsure about volleying
		break;
		default:
		break;
	}
}