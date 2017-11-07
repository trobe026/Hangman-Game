var instruments = ["mandolin", "harpsichord", "electric bass", "bagpipes", "electric guitar", "xylophone"];

// Randomly chooses a choice from the options array. This is the Computer's guess.

function randomGuess() {
  var computerGuess = instruments[Math.floor(Math.random() * instruments.length)];
  return(computerGuess);
  }

var a = randomGuess();
var b = a.split ("");


function startGame() {
    document.getElementById("click").innerHTML = b;
}




// function GetSelectedItem() {
//
// }



// alert(a.charAt(1));
//
// document.getElementById('wins')
// // Alerts the Computer's guess.
