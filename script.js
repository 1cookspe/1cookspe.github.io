// variables
var racquet = 0;
var spin = 0;
var power = 0;
var control = 0;
var feel = 0;
var touch = 0;
var longevity = 0;
var feelPriority = false;
var longevityPriority = false;

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

	removeOrAdd("playingStyle");

	switch (racquet) {
		case 0: // no racquet
		break;
		case 1: // Babolat Aero
			
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
		// current playing
		case 0: // agressive, offensive player
			power = power + 30;
			control = control + 5;
			longevity = longevity + 10;
			touch = touch + 5;
			spin = spin + 10;
			feel = feel + 5;
			removeOrAdd("downfall");
			break;
		case 1: // consistent player with long rallies
			power = power + 5;
			spin = spin + 30;
			control = control + 20;
			feel = feel + 5;
			touch = touch + 5;
			longevity = longevity + 15;
			removeOrAdd("downfall");
			break;
		case 2: // all around player
			power = power + 10;
			spin = spin + 20;
			control = control + 10;
			touch = touch + 10;
			longevity = longevity + 10;
			feel = feel + 10;
			removeOrAdd("downfall");
			break;
		case 3: // not sure about TYPE OF PLAYER
			power = power + 10;
			spin = spin + 10;
			control = control + 10;
			touch = touch + 10;
			longevity = longevity + 5;
			feel = feel + 5;
			removeOrAdd("downfall");
			break;
		case 4: // hits ball too long
			// needs control
			control = control + 30;
			// spin as well
			spin = spin + 15;
			power = power + 5;
			touch = touch + 10;
			longevity = longevity + 10;
			removeOrAdd("comfort");
			break;
		case 5: // not deep enough
			// needs spin
			spin = spin + 25;
			power = power + 20;
			control = control + 5;
			touch = touch + 5;
			longevity = longevity + 5;
			feel = feel + 5;
			removeOrAdd("comfort");
			break;
		case 6: // can't hit targets
			// needs control
			control = control + 25;
			spin = spin + 20;
			power = power + 10;
			touch = touch + 10;
			removeOrAdd("comfort");
			break;
		case 7: // not sure about downfall
			power = power + 10;
			control = control + 10;
			touch = touch + 5;
			longevity = longevity + 5;
			spin = spin + 10;
			feel = feel + 5;
			removeOrAdd("comfort");
			break;
		case 8: // hit ball as hard as possible
			power = power + 20;
			control = control + 10;
			spin = spin + 5;
			break;
		case 9: // hit ball with topspin to ensure that it stays in
			power = power + 10;
			control = control + 20;
			touch = touch + 5;
			spin = spin + 15;
			break;
		case 10: // slice approach
			power = power + 5;
			control = control + 15;
			touch = touch + 30;
			spin = spin + 10;
			break;
		case 11: // not sure about approach
			power = power + 10;
			control = control + 10;
			touch = touch + 10;
			spin = spin + 5;
			break;
		case 12: // arm uncomfortable
			// needs comfort
			feel = feel + 70;
			feelPriority = true;
			removeOrAdd("durability");
		break;
		case 13: // arm comfortable
			feel = feel + 10;
			feelPriority = false;
			removeOrAdd("durability");
		break;
		case 14: // unsure about arm
			feel = feel + 20;
			feelPriority = false;
			removeOrAdd("durability");
			break;
		case 15: // breaks strings a lot
			longevity = longevity + 60;
			longevityPriority = true;
			removeOrAdd("touch");
			break;
		case 16: // does not break strings
			longevity = longevity + 10;
			// maybe can have more spin and power?
			//spin = spin + 20;
			//power = power + 20;
			longevityPriority = false;
			removeOrAdd("touch");
			break;
		case 17: // unsure about strings
			longevity = longevity + 30;
			longevityPriority = false;
			removeOrAdd("touch");
			break;
		case 18: // volleys a lot
			// needs touch
			touch = touch + 50;
			feel = feel + 20;
			control = control + 10;
			spin = spin + 10;
			removeOrAdd("improve");
			break;
		case 19: // does not volley a lot
			touch = touch + 5;
			removeOrAdd("improve");
			break;
		case 20: // unsure about volleying
			touch = touch + 10;
			feel = feel + 5;
			removeOrAdd("improve");
			break;
		default:
		break;
	}
}

function removeOrAdd(idString) {
	document.getElementById(idString).classList.remove('hidden');
	document.getElementById(idString).classList.toggle('show');
}

function submitAnswers() {
	var choice = document.forms[0];
	var checked = false;

	alert('submit!');

	for(var i = 0; i < choice.length; i++ ) {
     if(choice[i].checked) {
       checked = true;
       if (i == 0) { // wants more power
       		power = power + 30;
       } else if (i == 1) {
       		spin = spin + 30;
       } else if (i == 2) {
       		control = control + 30;
       }
     }
  } 
  // if user click submit button without selecting any option, alert box should be say "please select choice answer".
  if(!checked) {
    alert("please select choice answer");
    return;
  }
  // calculate distribution of user's preferences
  calculatePreferences();
}

function calculatePreferences() {
	var totalScore = spin + power + control + touch + feel + longevity;

	// calculate percentages of each aspect
	var spinPercentage = (spin / totalScore) * 100;
	var powerPercentage = (power / totalScore) * 100;
	var controlPercentage = (control / totalScore) * 100;
	var feelPercentage = (feel / totalScore) * 100;
	var touchPercentage = (touch / totalScore) * 100;
	var longevityPercentage = (longevity / totalScore) * 100;

	document.getElementById('resultsText').innerHTML = "Spin: " + spin + "\nPower: " + power + "\nControl: " + control + "\nFeel: " + feel + "\nTouch: " + touch +  "\nLong: " + longevity;

	// power vs control --> do they need a control racquet?
}