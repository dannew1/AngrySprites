/**
 * Created by Daniel on 2015-10-11.
 */
var loadState = {

    preload: function() {

        var loadingLabel = game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'});

        game.load.image('EliasButton', 'Images/Faces/EliasButton.png');
        game.load.image('RasmusButton', 'Images/Faces/RasmusButton.png');
        game.load.image('MoaButton', 'Images/Faces/MoaButton.png');
        game.load.image('MichelleButton', 'Images/Faces/MichelleButton.png');
        game.load.image('KajsaButton', 'Images/Faces/KajsaButton.png');
        game.load.image('BenjaminButton', 'Images/Faces/BenjaminButton.png');
        game.load.image('PernillaButton', 'Images/Faces/PernillaButton.png');
        game.load.image('fireTrail', 'Images/Attacks/fireTrail.png');
        game.load.audio("spawnSound", "Sounds/Spawn enemy.mp3");
        game.load.audio("deathSound", "Sounds/Death.mp3");
        game.load.audio("basicSong", "Sounds/basicSong.mp3");
        nameList.push("EliasButton", "RasmusButton", "MoaButton", "KajsaButton", "BenjaminButton", "PernillaButton");

    },

    create: function() {
        game.state.start('menu');
    }
};