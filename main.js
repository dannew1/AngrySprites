/**
 * Created by Daniel on 2015-06-09.
 */
var game = new Phaser.Game(320, 480, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var cursors;
var picture;

function preload() {
    game.load.image('EliasButton', 'Pictures/EliasButton.png');
}

function create() {
    cursors = game.input.keyboard.createCursorKeys();
    picture = game.add.sprite(10, 425, 'EliasButton');
    game.physics.enable(picture, Phaser.Physics.ARCADE);


}

function update() {
    var xspeed = 0;
    var yspeed = 0

    if (cursors.left.isDown) {
        xspeed = -10;
    }
    if (cursors.right.isDown) {
        xspeed = 10;
    }
    if (cursors.up.isDown) {
        yspeed = -10;
    }
    if (cursors.down.isDown) {
        yspeed = 10;
    }

    picture.body.velocity.x = xspeed;
    picture.body.velocity.y = yspeed;
}
