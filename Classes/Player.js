Player = function (game)
{
    cursors = game.input.keyboard.createCursorKeys();

    //player = game.add.sprite(135, 215, 'MichelleButton');
    Phaser.Sprite.call(this, game, 135, 215, "MichelleButton");
    //game.physics.enable(player, Phaser.Physics.ARCADE);
    game.physics.arcade.enableBody(this);

    this.body.velocity.x = 0;
    this.body.velocity.y = 0;

};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function() {
    this.movePicture();
    this.killPlayer();
    this.outerWalls();

};

Player.prototype.movePicture = function () {

    var movingSpeed = 50;
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

    this.body.velocity.x = xspeed;
    this.body.velocity.y = yspeed;
};

Player.prototype.killPlayer = function() {
    game.physics.arcade.overlap(player, enemies, this.playerLoosesLife, null, this);
};

Player.prototype.playerDies = function() {
    this.kill();
    //updateStop = true;
    game.score = this.scoreText.text
    game.state.start('win');
};

Player.prototype.playerLoosesLife = function() {
    playerLife -= 1;
    if (playerLife <= 0) {
        this.playerDies();
    }
};

Player.prototype.outerWalls = function() {
    if (this.x >= game.width - this.width)
        this.x = game.width - this.width;
    if (this.x <= 0)
        this.x = 0;
    if (this.y >= game.height - this.height)
        this.y = game.height - this.height;
    if (this.y <= 0)
        this.y = 0;
};