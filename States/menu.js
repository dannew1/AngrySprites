var menuState = {

    create: function () {
        var nameLabel = game.add.text(80, 80, 'Angry Sprites', {font: "50px Arial", fill: "#cc0000"});
        var startLabel = game.add.text(80, game.world.height-80, 'press "space" to start', {font: "25px Arial", fill: "#bb0000"});
        var startKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        startKey.onDown.addOnce(this.start, this);
    },

    start: function () {
        game.state.start('play');
    }

};