"use strict";



$(function() {
  
  var game = {
    colors: ["red", "blue", "green", "yellow", "brown", "pink"],
    pegs: ["black", "white"],
    currentRow: 1,
    currentPeg: 0
  }














  $(".color-select").on("click", function() {
    var color = $(this).attr("class");

    $("#row" + game.currentRow + " .hole:nth-child(" + (game.currentPeg + 2) + ")").removeClass().addClass("hole " + color);
    game.currentPeg = (game.currentPeg + 1) % 4;

    if (game.currentPeg === 0) {
      game.currentRow++;  //temp...call row check function here and put in white/black pegs
    }

  })












})