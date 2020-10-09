class S3 extends Phaser.Scene {
    constructor() {
        super('S3');
    }

 preload ()
{

this.load.video('p2', 'p2.mp4', 'loadeddata', false, true);
}
create ()
{
    
var vid = this.add.video(700, 300, 'p2');

vid.play(true);
var txt1 = this.add.text(100,100, 'CLICK HERE TO GO BACK TO MAIN PAGE');
txt1.setInteractive({ useHandCursor: true });
        
        txt1.setInteractive().on('pointerdown', function() {
            
            this.scene.scene.start('S1');
        });


}
}