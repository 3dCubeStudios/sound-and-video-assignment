class S2 extends Phaser.Scene {
    constructor() {
        super('S2');
    }

 preload ()
{

this.load.video('p1', 'p1.mp4', 'loadeddata', false, true);
}

 create ()
{
    
var vid = this.add.video(700, 300, 'p1');

vid.play(true);
var txt1 = this.add.text(100,100, 'CLICK HERE TO GO BACK TO MAIN PAGE');
txt1.setInteractive({ useHandCursor: true });
       
        txt1.setInteractive().on('pointerdown', function() {
            
            this.scene.scene.start('S1');
        });


}
}