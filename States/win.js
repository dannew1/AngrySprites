/**
 * Created by Daniel on 2015-09-19.
 */
var winState = {

    create: function() {
        this.winTheGame();

    },

    winTheGame: function () {
        game.deathSnd = game.add.audio('deathSound');
        game.deathSnd.play();
        var EndLabel = game.add.text(30, 80, 'Game Over', {font: "125px Arial", fill: "#696969"});
        var EndLabel = game.add.text(80, 200, game.score, {font: "40px Arial", fill: "#696969"});
    }
}