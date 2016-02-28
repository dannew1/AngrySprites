Enemy = function (game, startingTime) {

    var selectedFace = Math.floor(Math.random() * 6);
    var nameList = [];
    nameList.push("EliasButton", "RasmusButton", "MoaButton", "KajsaButton", "BenjaminButton", "PernillaButton");



    Phaser.Sprite.call(this, game, 0, 0, nameList[selectedFace]);

    game.spawnSnd = game.add.audio('spawnSound');
    game.spawnSnd.play();

    game.physics.arcade.enableBody(this);
    this.body.velocity.x = 0;
    this.body.velocity.y = 0;
    //this.tint = 0xCC0000;
    this.startingTime = startingTime;

    this.reset_position();
};

Enemy.prototype = Object.create(Phaser.Sprite.prototype);
Enemy.prototype.constructor = Enemy;

Enemy.prototype.update = function() {
    this.killEnemy();

};

Enemy.prototype.generatePosition = function() {

    var randomNumber = Math.random();

    var spriteSpeed = ((game.time.now - this.startingTime) * 0.00001 + 1) * baseEnemySpeed;

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

//gör till prototype

Enemy.prototype.killEnemy = function(){
    if (this.x <= -60 || this.x >= (game.width + 10) || this.y <= -60 || this.y >= (game.height + 10)) {

        this.reset_position ();
        console.log("reset")

    }
}

Enemy.prototype.reset_position = function() {

    var statObj = this.generatePosition();

    this.x = statObj.xpos;
    this.y = statObj.ypos;
    this.body.velocity.x = statObj.xspeed;
    this.body.velocity.y = statObj.yspeed;

}
