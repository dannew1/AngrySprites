Enemy = function (game, startingTime) {

    var selectedFace = Math.floor(Math.random() * 6);
    var nameList = [];
    nameList.push("EliasButton", "RasmusButton", "MoaButton", "KajsaButton", "BenjaminButton", "PernillaButton");

    //var xpos;
    //var ypos;
    //var xspeed = 0;
    //var yspeed = 0;
    //var randomNumber = Math.random();
    //var spriteSpeed = ((game.time.now - startingTime) * 0.00001 + 1) * baseEnemySpeed;

    //if (randomNumber >= 0.75) {
    //    xpos = Math.random() * (game.width - 50);
    //    ypos = -50;
    //    yspeed = spriteSpeed;
    //}
    //else if (randomNumber >= 0.5) {
    //    xpos = -50;
    //    ypos = Math.random() * (game.height - 50);
    //    xspeed = spriteSpeed;
    //}
    //else if (randomNumber >= 0.25) {
    //    xpos = Math.random() * (game.width - 50);
    //    ypos = game.height;
    //    yspeed = -spriteSpeed;
    //}
    //else {
    //    xpos = game.width;
    //    ypos = Math.random() * (game.height - 50);
    //    xspeed = -spriteSpeed;
    //}

    var stat_obj = this.generatePosition(startingTime);

    Phaser.Sprite.call(this, game, stat_obj.xpos, stat_obj.ypos, nameList[selectedFace]);

    game.spawnSnd = game.add.audio('spawnSound');
    game.spawnSnd.play();

    game.physics.arcade.enableBody(this);
    //game.physics.enable(this, Phaser.Physics.ARCADE);
    //game.physics.arcade.enable(this);
    //var enemy = enemies.create(xpos, ypos, nameList[selectedFace]);

    this.body.velocity.x = stat_obj.xspeed;
    this.body.velocity.y = stat_obj.yspeed;
    //this.tint = 0xCC0000;
};

Enemy.prototype = Object.create(Phaser.Sprite.prototype);
Enemy.prototype.constructor = Enemy;

Enemy.prototype.update = function() {

};

Enemy.prototype.generatePosition = function(startingTime) {

    var randomNumber = Math.random();
    var spriteSpeed = ((game.time.now - startingTime) * 0.00001 + 1) * baseEnemySpeed;

    var stat_obj = {};

    stat_obj.xspeed = 0;
    stat_obj.yspeed = 0;

    if (randomNumber >= 0.75) {
        stat_obj.xpos = Math.random() * (game.width - 50);
        stat_obj.ypos = -50;
        stat_obj.yspeed = spriteSpeed;
    }
    else if (randomNumber >= 0.5) {
        stat_obj.xpos = -50;
        stat_obj.ypos = Math.random() * (game.height - 50);
        stat_obj.xspeed = spriteSpeed;
    }
    else if (randomNumber >= 0.25) {
        stat_obj.xpos = Math.random() * (game.width - 50);
        stat_obj.ypos = game.height;
        stat_obj.yspeed = -spriteSpeed;
    }
    else {
        stat_obj.xpos = game.width;
        stat_obj.ypos = Math.random() * (game.height - 50);
        stat_obj.xspeed = -spriteSpeed;
    }
    return stat_obj;
};

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