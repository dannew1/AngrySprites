FireTrail = function (game, xpos, ypos) {

    Phaser.Sprite.call(this, game, xpos, ypos, "fireTrail");
    game.physics.arcade.enableBody(this);

    this.spawnTime = game.time.now;
    this.timeAlive = 0;
};

FireTrail.prototype = Object.create(Phaser.Sprite.prototype);
FireTrail.prototype.constructor = FireTrail;

FireTrail.prototype.update = function(){
    this.updateSpawnTime();
    this.killTrail();
};

FireTrail.prototype.killTrail = function(){
    if(this.timeAlive >= 5000) {
        this.destroy();
    }
};

FireTrail.prototype.updateSpawnTime = function(){
    this.timeAlive = game.time.now - this.spawnTime;
};