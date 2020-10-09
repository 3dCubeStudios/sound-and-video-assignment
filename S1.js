class S1 extends Phaser.Scene {
    constructor() {
        super('S1');
        
    }
    preload() {
      this.load.image("earth", "images/earth.jpg");
      this.load.image("mars", "images/mars.jpg");
      this.load.image("venus", "images/venus.jpg");
  }
  create() {
    
    var txt1 = this.add.text(570,50, 'CLICK ON THE PLANET TO WATCH VIDEO');
   
    var img1 = this.add.image(100+90,200, "earth");
    var img2 = this.add.image(600+90,200, "mars");
    var img3 = this.add.image(1100+90,200, "venus");
    img1.setInteractive({ useHandCursor: true });
        
        img1.setInteractive().on('pointerdown', function()
         {
            
            this.scene.scene.start('S2');
        });
        img2.setInteractive({ useHandCursor: true });
        
        img2.setInteractive().on('pointerdown', function()
         {
            
            this.scene.scene.start('S3');
        });

        img3.setInteractive({ useHandCursor: true });
        
        img3.setInteractive().on('pointerdown', function()
         {
            
            this.scene.scene.start('S4');
        });
        
}


}



  