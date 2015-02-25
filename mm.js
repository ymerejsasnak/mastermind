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
                    this.colors[Math.floor(Math.random() * 6)]]
  };

  Game.prototype.setSequence = function() {
    //set colors from sequence to answer divs in game display
    this.sequence.forEach(function(color, index) {
      $("#row-solution .hole:nth-child(" + (index + 2) + ")").addClass(color);  
    })
  };

  Game.prototype.checkGuess = function() {
    
    //working on this...maybe instead need to put both arrays into seperate arrays that I can delete from as I check

    //detect correct color and placement
    this.guess.forEach(function(guessCol, guessIndex) {
      if (guessCol === this.sequence[guessIndex]) {
        this.hintPegs.black++;        
      }
      

    }.bind(this));

    
    console.log(this.hintPegs)
  }

  Game.prototype.showHints = function() {

  }

  
  
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
      game.hintPegs = {black: 0, white: 0}
    }

  })









  var game = new Game;

  game.createSequence()
  game.setSequence()


})