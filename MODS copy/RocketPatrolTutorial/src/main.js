// create game configuration object// 
let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ],
};

// create main game object//
let game = new Phaser.Game(config);
// define game settings
game.settings = {
    spaceshipSpeed: 3, 
    //spaceshipSpeed2: spaceshipSpeed*2,
    gameTimer: 60000
}
// reserve some keyboard
let keySPACE, keyM, keyF, keyLEFT, keyRIGHT;

let highScore;
let level;
let newHighScore = false;


// console.log("Hello whirled!");//