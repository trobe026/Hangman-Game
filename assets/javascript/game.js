var instruments = ["mandolin", "harpsichord", "electric bass", "bagpipes", "electric guitar", "xylophone"];
var blanks = [];
var lives = 7;
var guesses = [];
var wordsGuessed = [];
var randomWord = "";
var computerGuess = instruments[Math.floor(Math.random() * instruments.length)];
var word = computerGuess.split("");

  // Randomly chooses from the instruments array. This is the Computer's guess.
function startGame() {
  console.log(word);
  $("#hangman").html("<img src=./assets/images/Hangman-0.png>");
  function blankGen() {
    for (i = 0;i < word.length;i++) {
      blanks[i] = "_";
      console.log(blanks);
      $("#click").html("Current Word: " + blanks.join(' '));
      $("#wordsGuessed").html("Words Guessed: "+ wordsGuessed.join(" "));
      $("#lives").html("Guesses Remaining: " + lives);
    }
    for(i = 0;i < wordsGuessed.length;i++) {
      $("#hangman").html("<img src=./assets/images/Hangman-" + [i + 1] + ".png>");
    }
  }
  blankGen();
    }
    document.onkeyup = function(press){
        var guess = (press.key);
        console.log(guess);
        guesses.push(guess);
        for(i = 0; i < guesses.length; i++)
          for(j = 0; j<blanks.length; j++){
            if(guess == word[j]){
              console.log("correct!");
              blanks[j] = guess;
            }
          }
        if(word.indexOf(guess) < 0){
            lives -- ;
            wordsGuessed.push(guess);
        }

        for(i = 0; i<wordsGuessed.length ; i++){
            $("#hangman").html("<img src=\"assets/images/Hangman-" + [i + 1] +".png\">");
            if(i > 5){
              $("#hangman").html("<h2>YOU LOSE!")
            }
        }
        $("#click").html("Current Word: " + blanks.join(' '));
        $("#lives").html("Guesses Remaining: " + lives);
        $("#wordsGuessed").html("Words Guessed: " + "<br>" + wrongGuesses.join(" "));
        // $(".jumbotron").css("margin-bottom", "417px");

    }

      // $("newGame").on('click', function() {
      //   blanks = [];
      //   lives = 7;
      //   guesses = [];
      //   wrongGuesses = [];
      //   randomWord = "";





    // var numbers = [1, 5, 10, 15];
    // var doubles = numbers.map(function test(y) {
    //    return y * 3;
    // });
    //
    // console.log(doubles);




// function GetSelectedItem() {
//
// }



// alert(a.charAt(1));
//
// document.getElementById('wins')
// // Alerts the Computer's guess.
