/**
 * Created by Daniel on 2015-10-11.
 */
var bootState = {

    create: function () {

        game.physics.startSystem(Phaser.Physics.ARCADE);

        game.state.start('load');
    }
};