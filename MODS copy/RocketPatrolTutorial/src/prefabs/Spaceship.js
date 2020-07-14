// Rocket prefab
class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) { 
        super(scene, x, y, texture, frame);

        // add object to existing scene
        scene.add.existing(this);

        // store pointValue
        this.points = pointValue;
    }

    isSmallShip() {
        return false;
    }

    update() {
        // move spaceship left
        this.x -= 0;
        //this.ship04 -= game.settings.spaceshipSpeed1;
        //this.spacecraft -= game.settings.spaceshipSpeed*1.75;
        
        // move spaceship right


        // wrap around from left to right edge
        if(this.x <= 0 - this.width) {
            this.x = game.config.width;
        }

        // wrap around from right to left edge
        
        
        
    }

    reset() {
        this.x = game.config.width;
    }
}