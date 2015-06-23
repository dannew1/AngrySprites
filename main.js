/**
 * Created by Daniel on 2015-06-09.
 */
var game = new Phaser.Game(320, 480, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var cursors;
var picture;
var enemy;

function preload() {
    game.load.image('EliasButton', 'Pictures/EliasButton.png');
    game.load.image('RasmusButton', 'Pictures/MoneyButton.png');
}

function create() {
    cursors = game.input.keyboard.createCursorKeys();
    picture = game.add.sprite(10, 425, 'EliasButton');
    spawnEnemy();

    game.physics.enable(picture, Phaser.Physics.ARCADE);



}

function update() {
    movePicture();
}

function movePicture() {
    var xspeed = 0;
    var yspeed = 0;

    if (cursors.left.isDown) {
        xspeed = -35;
    }
    if (cursors.right.isDown) {
        xspeed = 35;
    }
    if (cursors.up.isDown) {
        yspeed = -35;
    }
    if (cursors.down.isDown) {
        yspeed = 35;
    }

    picture.body.velocity.x = xspeed;
    picture.body.velocity.y = yspeed;
}

function spawnEnemy() {
    var xpos;
    var ypos;
    var xspeed = 0;
    var yspeed = 0;

    if (Math.random >= 0.5){
        xpos = Math.random() * 250 + 10;
        ypos = -50;
        yspeed = 20;
    }
    else {
        xpos = -50;
        ypos = Math.random() * 410 + 10;
        xspeed = 20;
    }
    enemy = game.add.sprite(xpos, ypos, 'RasmusButton');
    game.physics.enable(enemy, Phaser.Physics.ARCADE);
    enemy.body.velocity.y = yspeed;
    enemy.body.velocity.x = xspeed;
}
