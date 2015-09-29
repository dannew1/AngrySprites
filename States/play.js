var cursors;
var player;
var enemies;
var spawningTime;
var spawningDelay = 5000;
//var scoreText;
var playerLife = 1;
var updateStop = false;
var nameList = [];

var playState = {



    preload: function () {
        this.game.load.image('EliasButton', 'Pictures/EliasButton.png');
        this.game.load.image('RasmusButton', 'Pictures/RasmusButton.png');
        this.game.load.image('MoaButton', 'Pictures/MoaButton.png');
        this.game.load.image('MichelleButton', 'Pictures/MichelleButton.png');
        this.game.load.image('KajsaButton', 'Pictures/KajsaButton.png');
        this.game.load.image('BenjaminButton', 'Pictures/BenjaminButton.png');
        this.game.load.audio("spawnSound", "Sounds/Spawn enemy.wav");
        this.game.load.audio("deathSound", "Sounds/Death.wav");
        this.game.load.audio("basicSong", "Sounds/basicSong.wav");
        nameList.push("EliasButton", "RasmusButton", "MoaButton", "KajsaButton", "BenjaminButton");
    },

    create: function () {
        cursors = game.input.keyboard.createCursorKeys();
        player = game.add.sprite(135, 215, 'MichelleButton');
        game.physics.enable(player, Phaser.Physics.ARCADE);

        enemies = game.add.group();
        enemies.enableBody = true;
        enemies.physicsBodyType = Phaser.Physics.ARCADE;
        //enemy.setAll('outOfBoundsKill', true);
        //enemy.setAll('checkWorldBounds', true);

        this.startingTime = game.time.now;
        spawningTime = game.time.now + spawningDelay;
        this.spawnEnemy();

        this.scoreText = game.add.text(10, 420, '0',
            {font: '52px Aria;l', fill: '#ffa'});

        //loopSong();
    },

    update: function () {
        if (updateStop == false) {
            this.movePicture();
            this.killPlayer();
            this.newEnemies();
            this.setScoreCounter();
            enemies.forEach(this.killEnemy, this);

        }
        this.outerWalls();
        //console.log(player.x)
    },

    movePicture: function () {
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
    },

    spawnEnemy: function () {
        var xpos;
        var ypos;
        var xspeed = 0;
        var yspeed = 0;
        var randomNumber = Math.random();
        var spriteSpeed = ((game.time.now - this.startingTime) * 0.00001 + 1) * 50;
        var selectedFace = Math.floor(Math.random() * 5);

        if (randomNumber >= 0.75) {
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
    },

    killEnemy: function (enemy) {
        if (enemy.x <= -60 || enemy.x >= (game.width + 10) || enemy.y <= -60 || enemy.y >= (game.height + 10)) {

            enemy.destroy();
            this.spawnEnemy(this.startingTime);

        }
    },
    killPlayer: function () {
        game.physics.arcade.overlap(player, enemies, this.playerLoosesLife, null, this);
    },

    playerDies: function () {
        player.kill();
        game.deathSnd = game.add.audio('deathSound');
        game.deathSnd.play();
        updateStop = true;
    },

    playerLoosesLife: function () {
        playerLife -= 1;
        if (playerLife <= 0) {
            this.playerDies();
        }
    },
    newEnemies: function () {
        if (game.time.now >= spawningTime) {
            spawningTime = game.time.now + spawningDelay;
            this.spawnEnemy(this.startingTime);
        }
    },

    setScoreCounter: function () {
        //Kan radera if()
        if (playerLife >= 1) {
            this.scoreText.text = Math.floor((game.time.now - this.startingTime) / 1000) + " sec"
        }
    },

    loopSong: function () {
        this.basic_song = game.add.audio('Sounds/basicSong.wav');
        game.basic_song = game.add.audio('basicSong');
        var that = this;
        this.basic_song.addEventListener('ended', function () {
            that.basic_song.play();
        }, false);
        this.basic_song.play();
    },

    outerWalls: function () {
        if (player.x >= game.width - player.width)
            player.x = game.width - player.width;
        if (player.x <= 0)
            player.x = 0;
        if (player.y >= game.height - player.height)
            player.y = game.height - player.height;
        if (player.y <= 0)
            player.y = 0;
    }
};