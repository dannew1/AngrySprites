/**
 * Created by Daniel on 2015-06-09.
 */
var game = new Phaser.Game(320, 480, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
    game.load.image('EliasButton', 'Pictures/EliasButton.png');
}

function create() {
    game.add.sprite(10, 425, 'EliasButton');
}

function update() {

}