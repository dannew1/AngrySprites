/**
 * Created by Daniel on 2015-06-09.
 */
var game = new Phaser.Game(720, 480, Phaser.AUTO, '');

game.state.add('menu', menuState);
//game.state.add('play', playState);
//game.state.add('win', winState);

game.state.start('menu');