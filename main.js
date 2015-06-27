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
    picture = game.add.sprite(135, 215, 'EliasButton');
    spawnEnemy();

    game.physics.enable(picture, Phaser.Physics.ARCADE);



}

function update() {
    movePicture();
    killEnemy();
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
    var randomNumber = Math.random();
    var spriteSpeed = 50;

    if (randomNumber >= 0.75){
        xpos = Math.random() * 270;
        ypos = -50;
        yspeed = spriteSpeed;
    }
    else if (randomNumber >= 0.5) {
        xpos = -50;
        ypos = Math.random() * 430;
        xspeed = spriteSpeed;
    }
    else if (randomNumber >= 0.25) {
        xpos = Math.random() * 270;
        ypos = 480;
        yspeed = -spriteSpeed;
    }
    else {
        xpos = 320;
        ypos = Math.random() * 430;
        xspeed = -spriteSpeed;
    }
    enemy = game.add.sprite(xpos, ypos, 'RasmusButton');
    game.physics.enable(enemy, Phaser.Physics.ARCADE);
    enemy.body.velocity.y = yspeed;
    enemy.body.velocity.x = xspeed;
}

function killEnemy() {
    if (enemy.x <= -60 || enemy.x >=330 || enemy.y <= -60 || enemy.y >= 490) {

        enemy.kill();
        spawnEnemy();

    }
}