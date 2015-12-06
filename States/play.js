var cursors;
var player;
var enemies;
var spawningTime;
var spawningDelay = 15000;
//var scoreText;
var playerLife = 1;
var updateStop = false;
var nameList = [];
var deathCharge;
var movingSpeed = 50;
var baseEnemySpeed = 50;
var playState = {



    preload: function () {

    },

    create: function () {
        cursors = game.input.keyboard.createCursorKeys();
        player = game.add.sprite(135, 215, 'MichelleButton');
        game.physics.enable(player, Phaser.Physics.ARCADE);

        enemies = game.add.group();
        enemies.enableBody = true;
        enemies.physicsBodyType = Phaser.Physics.ARCADE;

        this.startingTime = game.time.now;
        spawningTime = game.time.now + spawningDelay;
        var i = 4;
        while(i > -1)
            {
                spawnEnemy(this.startingTime);
                i--;
            }


        this.scoreText = game.add.text(10, 420, '0',
            {font: '52px Aria;l', fill: '#ffa'});
        deathCharge = 1;

        this.loopSong();
    },

    update: function () {
        if (updateStop == false) {
            this.movePicture();
            this.killPlayer();
            this.newEnemies();
            this.setScoreCounter();
            enemies.forEach(this.killEnemy, this);
            this.deathCall(enemies, player);
        }
        this.outerWalls();
        //console.log(player.x)
    },

    movePicture: function () {
        var xspeed = 0;
        var yspeed = 0;


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

    //////////////

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
        updateStop = true;
        game.score = this.scoreText.text
        game.state.start('win');
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
            spawnEnemy(this.startingTime);
        }
    },

    setScoreCounter: function () {
        //Kan radera if()
        if (playerLife >= 1) {
            this.scoreText.text = Math.floor((game.time.now - this.startingTime) / 1000) + " sec"
        }
    },

    loopSong: function () {
        basic_song = game.add.audio('basicSong');
        var that = this;
        basic_song.play();
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
    },

    deathCall: function (enemies, player) {
        zKey = this.input.keyboard.addKey(Phaser.Keyboard.Z);

        if (zKey.isDown && deathCharge >= 1) {
            deathCharge =- 1;
            this.groupCleanUp(enemies);
            movingSpeed = 30;
            baseEnemySpeed = 75;
        }
    },

    groupCleanUp: function(enemies) {
        var aCleanup = [];
        enemies.forEach(function(enemy){
            aCleanup.push(enemy);
        });

        var i = aCleanup.length - 1;
        while(i > -1)
        {
            var getitem = aCleanup[i];
            getitem.destroy();
            i--;
        }
    },
};