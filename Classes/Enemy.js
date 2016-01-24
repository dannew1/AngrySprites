function spawnEnemy (startingTime) {
    var xpos;
    var ypos;
    var xspeed = 0;
    var yspeed = 0;
    var randomNumber = Math.random();
    var spriteSpeed = ((game.time.now - startingTime) * 0.00001 + 1) * baseEnemySpeed;
    var selectedFace = Math.floor(Math.random() * 6);

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
    enemy.tint = 0xCC0000;

    game.spawnSnd = game.add.audio('spawnSound');
    game.spawnSnd.play();
}