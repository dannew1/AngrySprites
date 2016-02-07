Enemy = function (game, startingTime) {
    var xpos;
    var ypos;
    var xspeed = 0;
    var yspeed = 0;
    var randomNumber = Math.random();
    var spriteSpeed = ((game.time.now - startingTime) * 0.00001 + 1) * baseEnemySpeed;
    var selectedFace = Math.floor(Math.random() * 6);
    var nameList = [];
    nameList.push("EliasButton", "RasmusButton", "MoaButton", "KajsaButton", "BenjaminButton", "PernillaButton");

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

    //var enemy = enemies.create(xpos, ypos, nameList[selectedFace]);
    //this.body.velocity.y = yspeed;
    //this.body.velocity.x = xspeed;
    //this.tint = 0xCC0000;

    game.spawnSnd = game.add.audio('spawnSound');
    game.spawnSnd.play();

    Phaser.Sprite.call(this, game, 100, 100, 'EliasButton');

};

Enemy.prototype = Object.create(Phaser.Sprite.prototype);
Enemy.prototype.constructor = Enemy;

//function spawnEnemy (startingTime) {
//    var xpos;
//    var ypos;
//    var xspeed = 0;
//    var yspeed = 0;
//    var randomNumber = Math.random();
//    var spriteSpeed = ((game.time.now - startingTime) * 0.00001 + 1) * baseEnemySpeed;
//    var selectedFace = Math.floor(Math.random() * 6);
//    var nameList = [];
//    nameList.push("EliasButton", "RasmusButton", "MoaButton", "KajsaButton", "BenjaminButton", "PernillaButton");
//
//    if (randomNumber >= 0.75) {
//        xpos = Math.random() * (game.width - 50);
//        ypos = -50;
//        yspeed = spriteSpeed;
//    }
//    else if (randomNumber >= 0.5) {
//        xpos = -50;
//        ypos = Math.random() * (game.height - 50);
//        xspeed = spriteSpeed;
//    }
//    else if (randomNumber >= 0.25) {
//        xpos = Math.random() * (game.width - 50);
//        ypos = game.height;
//        yspeed = -spriteSpeed;
//    }
//    else {
//        xpos = game.width;
//        ypos = Math.random() * (game.height - 50);
//        xspeed = -spriteSpeed;
//    }
//
//    //var enemy = enemies.create(xpos, ypos, nameList[selectedFace]);
//    this.body.velocity.y = yspeed;
//    this.body.velocity.x = xspeed;
//    this.tint = 0xCC0000;
//
//    game.spawnSnd = game.add.audio('spawnSound');
//    game.spawnSnd.play();
//
//    killEnemy: function (enemy) {
//        if (enemy.x <= -60 || enemy.x >= (game.width + 10) || enemy.y <= -60 || enemy.y >= (game.height + 10)) {
//
//            enemy.destroy();
//            spawnEnemy(this.startingTime);
//
//        }
//    }
//}