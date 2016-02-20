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

    Phaser.Sprite.call(this, game, 0, 0, nameList[selectedFace]);


    game.spawnSnd = game.add.audio('spawnSound');
    game.spawnSnd.play();

    game.physics.arcade.enableBody(this);
    //game.physics.enable(this, Phaser.Physics.ARCADE);
    //game.physics.arcade.enable(this);
    //var enemy = enemies.create(xpos, ypos, nameList[selectedFace]);
    this.body.velocity.x = 0;
    this.body.velocity.y = 0;

    //this.tint = 0xCC0000;

    this.reset_position(startingTime);
};

Enemy.prototype = Object.create(Phaser.Sprite.prototype);
Enemy.prototype.constructor = Enemy;

Enemy.prototype.update = function(startingTime) {
    killEnemy(this, startingTime);

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

function killEnemy (enemy, startingTime) {
    if (enemy.x <= -60 || enemy.x >= (game.width + 10) || enemy.y <= -60 || enemy.y >= (game.height + 10)) {

        enemy.reset_position (startingTime);
        console.log("reset")

    }
}

Enemy.prototype.reset_position = function(startingTime) {

    var randomNumber = Math.random();
    var spriteSpeed = ((game.time.now - startingTime) * 0.00001 + 1) * baseEnemySpeed;
    var statObj = {};

    statObj.xpos = 0;
    statObj.xpos = 0;
    statObj.xspeed = 0;
    statObj.yspeed = 0;

    if (randomNumber >= 0.75) {
        statObj.xpos = Math.random() * (game.width - 50);
        statObj.ypos = -50;
        statObj.yspeed = spriteSpeed;
    }
    else if (randomNumber >= 0.5) {
        statObj.xpos = -50;
        statObj.ypos = Math.random() * (game.height - 50);
        statObj.xspeed = spriteSpeed;
    }
    else if (randomNumber >= 0.25) {
        statObj.xpos = Math.random() * (game.width - 50);
        statObj.ypos = game.height;
        statObj.yspeed = -spriteSpeed;
    }
    else {
        statObj.xpos = game.width;
        statObj.ypos = Math.random() * (game.height - 50);
        statObj.xspeed = -spriteSpeed;
    }

    this.x = statObj.xpos;
    this.y = statObj.ypos;
    this.body.velocity.x = statObj.xspeed;
    this.body.velocity.y = statObj.yspeed;

}
