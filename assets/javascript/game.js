// start game variables
var instruments = ["mandolin", "harpsichord", "electricbass", "bagpipes", "electricguitar", "xylophone", "ukulele", "tambourine", "theremin", "synthesizer", "clarinet", "saxophone", "flugelhorn", "glockenspiel", "recorder"];
var blanks = [];
var lives = 10;
// onkey variabes
var guesses = [];
var lettersGuessed = [];
var computerGuess = instruments[Math.floor(Math.random() * instruments.length)];
var word = computerGuess.split("");


  // Randomly chooses word from the instruments array. This is the Computer's guess. Hides old html elements and reveals new. Adds hangman image
function startGame() {
  computerGuess = instruments[Math.floor(Math.random() * instruments.length)];
  word = computerGuess.split("");
  $("#hangman").html("<img src=./assets/images/Hangman-0.png>");
  $("body").css({
    "font-family": "'Passion One', cursive",
    "font-family": "'Josefin Slab', serif",
    "background": "url('./assets/images/intersection.png')"
  });
  $("#newGame").css({
    visibility: "visible",
    "padding": "20px"
  });
  $("#title").css({
    visibility: "visible",
  });
  $("#start").css({
    visibility: "hidden",
    "padding": "20px"
  });
  $(".glyphicon").css({
    visibility: "hidden",
  });
// creates "_" for each letter in word and joins them together. Adds html for letters guessed to populate.
  function blankGen() {
    for (i = 0;i < word.length;i++) {
      blanks[i] = "_";
      $("#currentWord").html("Current Word: " + "<br>" + blanks.join(" ")).css({
        margin: "10px",
        "padding-top": "20px",
        width: "100%"
      });
      $("#lettersGuessed").html("Words Guessed: "+ lettersGuessed.join(" ")).css({
        margin: "10px",
        "padding-top": "20px"
      });;
      $("#lives").html("Guesses Remaining: " + lives).css({
        margin: "10px",
        "padding-top": "20px"
      });
    }
  }
  blankGen();
    }

// when key is pressed key is logged and passed into guess, each guess populates guesses array, for each guess, each blank is evaluated and if the guess matches it, it is placed in the blanks array.
    document.onkeyup = function(press){
        var guess = (press.key);
        console.log(guess);
        guesses.push(guess);
        for(i = 0; i < guesses.length; i++)
          for(j = 0; j < blanks.length; j++){
            if(guess === word[j]) {
              blanks[j] = guess;
            }
          }

        if(word.indexOf(guess) < 0){
            lives -- ;
            lettersGuessed.push(guess);
        }

        for(i = 0; i<lettersGuessed.length ; i++){
            $("#hangman").html("<img src=assets/images/Hangman-" + [i + 1] +".png>");
            if(i > 5){
              $('#start').remove();
              $("#hangman").html("<h1>SORRY, YOU LOSE!</h1>").css({
                color: "blue",
                width: "100%",
              });
            }
        }

        if(blanks.join('') === word.join('')) {
          $('#hangman').html("<h1>YOU WIN!!!</h1>");
        }

        $("#currentWord").html("Current Word: " + "<br>" + blanks.join(' '));
        $("#lives").html("Guesses Remaining: " + lives);
        $("#lettersGuessed").html("Letters Guessed: " + "<br>" + lettersGuessed.join(" "));
        $("#col-sm-12").css("margin-bottom", "417px");
    }
    // if(blanks == word) {
    //   console.log(blanks);
    //   console.log(word);
    //   $("#hangman").html("<h2>YOU WIN!!!</h2>");
    // }

    function reset() {
      blanks = [];
      lives = 10;
      guesses = [];
      lettersGuessed = [];
      startGame();
    }
