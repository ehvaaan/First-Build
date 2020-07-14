// Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) { 
        super(scene, x, y, texture, frame);

        // add object to existing scene
        scene.add.existing(this);

        // trace rocket's firing status
        this.isFiring = false;

        // add rocket sfx
        this.sfxRocket = scene.sound.add('sfx_rocket');

        
         }
    
    

    update() {
        // left/right movement
        if((!this.isFiring) || (this.isFiring)) {
            if(keyLEFT.isDown && this.x >= 47) { 
                this.x -= 2;
            } else if(keyRIGHT.isDown && this.x <= 578) {
                this.x += 2;
            }
        }
        
        // fire button
        if(Phaser.Input.Keyboard.JustDown(keyF) && !this.isFiring) {
            this.isFiring = true;
            //scene.add.text(69, 54, 'FIRE!', scoreConfig);
            // play sfx
            this.sfxRocket.play();
            this.scene.fire.setVisible(true);
        }
        
        
        /*this.add.rectangle(260, 55, 100, 34, 0xF3B141).setOrigin(0, 0);
        this.fire = this.add.text(69, 54, 'FIRE', fireConfig).setOrigin(0.5);
        
         if(this.isFiring) {            
            //this.fire = this.add.text(69, 54, this.p1score, scoreConfig);
            //this.fire.text = ;
            //this.fire = this.add.text(260, 55, 100, 34, 0xF3B141).setOrigin(0, 0);
            
            this.fire.text = this.add.text(this.fire);
            
        } */

        // if fired, move up (negative moves UP the screen)
        

        if(this.isFiring && this.y >= 108) {
            this.y -= 2;
        }
        
        // reset on miss - if this was greater than, it would constantly reset
        if(this.y <= 108) {
            this.isFiring = false;
            this.y = 431;
            this.scene.fire.setVisible(false);
        }
    }
    // reset rocket to "ground" if collision occurs
    reset() {
        this.isFiring = false;
        this.y = 431;
        this.scene.fire.setVisible(false);
    }
}
