var instruments = ["mandolin", "harpsichord", "electric bass", "bagpipes", "electric guitar", "xylophone"];

// Randomly chooses from the instruments array. This is the Computer's guess.
function randomGuess() {
  var computerGuess = instruments[Math.floor(Math.random() * instruments.length)];
  return(computerGuess);
  }

var a = randomGuess();
var b = a.split("");
console.log(b);

  function startGame() {
      $("#click").text(b);
  }

    console.log(b);


    var numbers = [1, 5, 10, 15];
    var doubles = numbers.map(function test(y) {
       return y * 3;
    });

    console.log(doubles);




// function GetSelectedItem() {
//
// }



// alert(a.charAt(1));
//
// document.getElementById('wins')
// // Alerts the Computer's guess.
