


 
var config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    parent: 'phaser-game',
    scene: [S1,S2,S3,S4]
};

var game = new Phaser.Game(config);