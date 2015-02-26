"use strict";



$(function() {
  

  function Game() {
    this.colors = ["red", "blue", "green", "yellow", "brown", "pink"];
    this.hintPegs = {black: 0, white: 0};

    this.currentRow = 1;
    this.currentPeg = 0;

    this.sequence = [];
    this.guess = [];
  }

  Game.prototype.createSequence = function() {
    //get 4 random colors from set of colors
    this.sequence =[this.colors[Math.floor(Math.random() * 6)], 
                    this.colors[Math.floor(Math.random() * 6)], 
                    this.colors[Math.floor(Math.random() * 6)], 
                    this.colors[Math.floor(Math.random() * 6)]];
  };

  Game.prototype.setSequence = function() {
    //set colors from sequence to answer divs in game display
    this.sequence.forEach(function(color, index) {
      $("#row-solution .hole:nth-child(" + (index + 2) + ")").addClass(color);  
    });
  };

  Game.prototype.checkGuess = function() {
    //use concat as easy way to copy array by value (don't need to do this for guess array though)
    var seq = this.sequence.concat();
    var guess = this.guess;

    for (var i = 0; i < 4; i++){
      //check for correct color and position
      if (guess[i] === seq[i]) {
        this.hintPegs.black++;
        //then mark guess color as checked
        //(using *different* meaningless placeholder numbers so they don't match below)
        seq[i] = 9;
        guess[i] = 99;
      }
    }
    for (var i = 0; i < 4; i++) {
      //check for correct color, wrong position
      if (seq.indexOf(guess[i]) > -1) {
        this.hintPegs.white++;
        seq[seq.indexOf(guess[i])] = 9;
        guess[i] = 99;
      }
    }
  };

  Game.prototype.showHints = function() {
    for (var i = 0; i < 4; i++) {
      if (this.hintPegs.black > 0) {
        $("#row" + game.currentRow + " .peg:nth-child(" + (i + 1) + ")").addClass("black");
        this.hintPegs.black--;
      }
      else if (this.hintPegs.white > 0) {
        $("#row" + game.currentRow + " .peg:nth-child(" + (i + 1) + ")").addClass("white");
        this.hintPegs.white--;
      }
    }
  };

  
  
  //handler for selection of color guesses
  $("#colors div").on("click", function() {
    var color = $(this).attr("class");

    game.guess.push(color);

    $("#row" + game.currentRow + " .hole:nth-child(" + (game.currentPeg + 2) + ")").removeClass().addClass("hole " + color);
    game.currentPeg = (game.currentPeg + 1) % 4;

    if (game.currentPeg === 0) {
      game.checkGuess();
      game.showHints();
      game.currentRow++;
      //reset guesses and hints
      game.guess = [];
      game.hintPegs = {black: 0, white: 0};
    }

  });









  var game = new Game();

  game.createSequence();
  game.setSequence();


});