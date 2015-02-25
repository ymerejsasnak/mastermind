"use strict";



$(function() {
  

  function Game() {
    this.colors = ["red", "blue", "green", "yellow", "brown", "pink"];
    this.pegs = ["black", "white"];
    this.currentRow = 1;
    this.currentPeg = 0;
    this.sequence = [];
  }

  Game.prototype.createSequence = function() {
    //get 4 random colors from set of colors
    this.sequence =[this.colors[Math.floor(Math.random() * 6)], 
                    this.colors[Math.floor(Math.random() * 6)], 
                    this.colors[Math.floor(Math.random() * 6)], 
                    this.colors[Math.floor(Math.random() * 6)]]
  }

  Game.prototype.setSequence = function() {
    //set colors from sequence to answer divs in game display
    this.sequence.forEach(function(color, index) {
      $("#row-solution .hole:nth-child(" + (index + 2) + ")").addClass(color);  
    })
    

  }



  
  
  //handler for selection of color guesses
  $(".color-select").on("click", function() {
    var color = $(this).attr("class");

    $("#row" + game.currentRow + " .hole:nth-child(" + (game.currentPeg + 2) + ")").removeClass().addClass("hole " + color);
    game.currentPeg = (game.currentPeg + 1) % 4;

    if (game.currentPeg === 0) {
      game.currentRow++;  //temp...call row check function here and put in white/black pegs
    }

  })









  var game = new Game;

  game.createSequence()
  game.setSequence()


})