/**
 * Created by Daniel on 2015-06-09.
 */
var game = new Phaser.Game(320, 480, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var cursors;
var player;
var enemies;
var spawningTime;
var spawningDelay = 5000;

function preload() {
    game.load.image('EliasButton', 'Pictures/EliasButton.png');
    game.load.image('RasmusButton', 'Pictures/RasmusButton.png');
    game.load.image('MoaButton', 'Pictures/MoaButton.png');
    game.load.image('MichelleButton', 'Pictures/MichelleButton.png');
}

function create() {
    cursors = game.input.keyboard.createCursorKeys();
    player = game.add.sprite(135, 215, 'MichelleButton');
    game.physics.enable(player, Phaser.Physics.ARCADE);

    enemies = game.add.group();
    enemies.enableBody = true;
    enemies.physicsBodyType = Phaser.Physics.ARCADE;
    //enemy.setAll('outOfBoundsKill', true);
    //enemy.setAll('checkWorldBounds', true);

    spawningTime = game.time.now + spawningDelay;
    spawnEnemy();
}

function update() {
    movePicture();
    killPlayer();
    enemies.forEach(killEnemy, this);
    newEnemies();
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

    player.body.velocity.x = xspeed;
    player.body.velocity.y = yspeed;
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

    var enemy = enemies.create(xpos, ypos, 'MoaButton');
    enemy.body.velocity.y = yspeed;
    enemy.body.velocity.x = xspeed;
}

function killEnemy(enemy) {
    if (enemy.x <= -60 || enemy.x >= 330 || enemy.y <= -60 || enemy.y >= 490) {

        enemy.destroy();
        spawnEnemy();

    }
}
function killPlayer() {
    game.physics.arcade.overlap(player, enemies, playerDies, null, this);
}

function playerDies () {
    player.kill();
}

function newEnemies () {
    if (game.time.now >= spawningTime){
        spawningTime = game.time.now + spawningDelay;
        spawnEnemy();
    }
}
