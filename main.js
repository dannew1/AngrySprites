/**
 * Created by Daniel on 2015-06-09.
 */
var game = new Phaser.Game(720, 480, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var cursors;
var player;
var enemies;
var spawningTime;
var spawningDelay = 5000;
var scoreText;
var playerLife = 1;
var updateStop = false;
var nameList = [];

function preload() {
    game.load.image('EliasButton', 'Pictures/EliasButton.png');
    game.load.image('RasmusButton', 'Pictures/RasmusButton.png');
    game.load.image('MoaButton', 'Pictures/MoaButton.png');
    game.load.image('MichelleButton', 'Pictures/MichelleButton.png');
    game.load.audio("spawnSound", "Sounds/Spawn enemy.wav");
    game.load.audio("deathSound", "Sounds/Death.wav");
    //game.load.audio("basicSong", "Sounds/basicSong.wav");
    nameList.push("EliasButton", "RasmusButton", "MoaButton");
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

    startingTime = game.time.now;
    spawningTime = game.time.now + spawningDelay;
    spawnEnemy(startingTime)

    scoreText = game.add.text(10,420, '0',
        {font: '52px Aria;l', fill: '#ffa'});

    //loopSong();
}

function update() {
    if (updateStop == false) {
        movePicture();
        killPlayer();
        newEnemies();
        setScoreCounter(startingTime);
        enemies.forEach(killEnemy, this);

    }
    outerWalls();
    //console.log(player.x)
}

function movePicture() {
    var xspeed = 0;
    var yspeed = 0;
    var movingSpeed = 50;

    if (cursors.left.isDown) {
        xspeed = -movingSpeed;
    }
    if (cursors.right.isDown) {
        xspeed = movingSpeed;
    }
    if (cursors.up.isDown) {
        yspeed = -movingSpeed;
    }
    if (cursors.down.isDown) {
        yspeed = movingSpeed;
    }

    player.body.velocity.x = xspeed;
    player.body.velocity.y = yspeed;
}

function spawnEnemy(startingTime) {
    var xpos;
    var ypos;
    var xspeed = 0;
    var yspeed = 0;
    var randomNumber = Math.random();
    var spriteSpeed = ((game.time.now - startingTime) * 0.00001 + 1) * 50;
    var selectedFace = Math.floor(Math.random() * 3);

    if (randomNumber >= 0.75){
        xpos = Math.random() * (game.width - 50);
        ypos = -50;
        yspeed = spriteSpeed;
    }
    else if (randomNumber >= 0.5) {
        xpos = -50;
        ypos = Math.random() * (game.height - 50);
        xspeed = spriteSpeed;
}
    else if (randomNumber >= 0.25) {
        xpos = Math.random() * (game.width - 50);
        ypos = game.height;
        yspeed = -spriteSpeed;
    }
    else {
        xpos = game.width;
        ypos = Math.random() * (game.height - 50);
        xspeed = -spriteSpeed;
    }

    var enemy = enemies.create(xpos, ypos, nameList[selectedFace]);
    enemy.body.velocity.y = yspeed;
    enemy.body.velocity.x = xspeed;

    game.spawnSnd = game.add.audio('spawnSound');
    game.spawnSnd.play();
}

function killEnemy(enemy) {
    if (enemy.x <= -60 || enemy.x >= (game.width + 10) || enemy.y <= -60 || enemy.y >= (game.height + 10)) {

        enemy.destroy();
        spawnEnemy(startingTime);

    }
}
function killPlayer() {
    game.physics.arcade.overlap(player, enemies, playerLoosesLife, null, this);
}

function playerDies () {
    player.kill();
    game.deathSnd = game.add.audio('deathSound');
    game.deathSnd.play();
    updateStop = true;
}

function playerLoosesLife () {
    playerLife -= 1;
    if (playerLife <= 0) {
        playerDies();
    }
}
function newEnemies () {
    if (game.time.now >= spawningTime){
        spawningTime = game.time.now + spawningDelay;
        spawnEnemy(startingTime);
    }
}

function setScoreCounter (startinTime) {
    //Kan radera if()
    if (playerLife >= 1){
        scoreText.text = Math.floor((game.time.now - startingTime)/1000) + " sec"
    }
}

function loopSong() {
    basic_song = new Audio('Sounds/basicSong.wav');
    game.basic_song = game.add.audio('basicSong');
    basic_song.addEventListener('ended', function() {
        basic_song.play();
    }, false);
    basic_song.play();
}

function outerWalls() {
    if(player.x >= game.width - player.width + 1)
        player.x = game.width - player.width;
    if(player.x <= -1)
    {
        player.x = 0;
        player.body.velocity.x = 0;
    }
    if(player.y >= game.height - player.height + 1)
        player.y = game.height - player.height;
    if(player.y <= -1)
        player.y = 0;
}