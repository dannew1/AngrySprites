var cursors;
var player;
var enemies;
var spawningTime;
var spawningDelay = 5000;
var scoreText;
var playerLife = 1;
//var updateStop = false;

var deathCharge;

var baseEnemySpeed = 50;
var test;
var test2;

var playState = {

    //fixa text i hörnet!!


    preload: function () {

    },

    create: function () {

        enemies = game.add.group();
        enemies.enableBody = true;
        enemies.physicsBodyType = Phaser.Physics.ARCADE;

        this.startingTime = game.time.now;
        spawningTime = game.time.now + spawningDelay;

        var i = 4;
        //while(i > -1)
            //{
                //spawnEnemy(this.startingTime);
                //i--;
            //}

        test2 = new Player(game, this.startingTime);
        game.add.existing(test2);

        test = new Enemy(game, this.startingTime);
        //game.add.existing(test);
        enemies.addChild(test);



        game.score = game.add.text(10, 420, '0',
            {font: '52px Aria;l', fill: '#ffa'});

        deathCharge = 1;

        this.loopSong();
    },

    update: function () {
        //if (updateStop == false) {

            this.newEnemies();
            this.setScoreCounter();
            //enemies.forEach(this.killEnemy, this);
            this.deathCall(enemies, player);
        //}

        //console.log(player.x)
        enemies.forEach(function(enemy) {
            this.game.physics.arcade.overlap(test2, enemy, test2.playerLoosesLife, null, this);
        }, this);
        //game.physics.arcade.collide(test, enemies, this.derpFunktion, null, this);
    },


    derpFunktion: function () {
        console.log("heelo")
    },

    newEnemies: function () {
        if (game.time.now >= spawningTime) {
            spawningTime = game.time.now + spawningDelay;
            //spawnEnemy(this.startingTime);

            var enemyInstance = new Enemy(game, this.startingTime);
            enemies.addChild(enemyInstance);
        }
    },



    loopSong: function () {
        basic_song = game.add.audio('basicSong');
        var that = this;
        basic_song.play();
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

    setScoreCounter: function() {
        game.score = test2.playerScore;
        console.log(game.score);
        //ska ända texten
    }
};