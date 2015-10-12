/**
 * Created by Daniel on 2015-10-11.
 */
var loadState = {

    preload: function() {

        var loadingLabel = game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'});

        game.load.image('EliasButton', 'Pictures/EliasButton.png');
        game.load.image('RasmusButton', 'Pictures/RasmusButton.png');
        game.load.image('MoaButton', 'Pictures/MoaButton.png');
        game.load.image('MichelleButton', 'Pictures/MichelleButton.png');
        game.load.image('KajsaButton', 'Pictures/KajsaButton.png');
        game.load.image('BenjaminButton', 'Pictures/BenjaminButton.png');
        game.load.audio("spawnSound", "Sounds/Spawn enemy.wav");
        game.load.audio("deathSound", "Sounds/Death.wav");
        game.load.audio("basicSong", "Sounds/basicSong.wav");
        nameList.push("EliasButton", "RasmusButton", "MoaButton", "KajsaButton", "BenjaminButton");

    },

    create: function() {
        game.state.start('menu');
    }
};