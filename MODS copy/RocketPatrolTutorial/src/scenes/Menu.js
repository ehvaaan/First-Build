class Menu extends Phaser.Scene { 
    constructor() {
        super("menuScene");
    }
    
    preload() {
    // load audio
    this.load.audio('sfx_select', './assets/blip_select12.wav');
    this.load.audio('target', './assets/target.wav' );
    this.load.audio('target1', './assets/target1.wav' );
    this.load.audio('target2', './assets/target2.wav' );
    this.load.audio('target4', './assets/target3.wav' );
    this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
    this.load.image('neuron', './assets/neuron.png');
    this.load.audio('background', './assets/background.wav')
}
    
    

    create() {
    var music = this.sound.add('background');
    music.setLoop(true);
    music.play();
    //this.synth = this.sound.play('background');

    // menu display
    if(window.localStorage) {
        console.log('Local storage supported');
    } else {
        console.log('Local storage not supported');
    }

    let menuConfig = {
        fontFamily: 'Montserrat Subrayada',
        fontSize: '26px',
        backgroundColor: '#FF7575',
        color: '#FFFFFF',
        align: 'right',
        padding: {
            top: 5,
            bottom: 5,
        },
        fixedWidth: 0
    }
    // menu text 
    let centerX = game.config.width/2;
    let centerY = game.config.height/2;
    let textSpacer = 64;

    // white backings
    this.add.rectangle(178, 80, 281, 65, 0xFFFFFF).setOrigin(0, 0);
    this.add.rectangle(148, 400, 342, 65, 0xFFFFFF).setOrigin(0, 0);
    this.add.rectangle(80, 207, 480, 65, 0xFFFFFF).setOrigin(0, 0);
    //this.add.rectangle(603, 5, 32, 455, 0xFFFFFF).setOrigin(0, 0);
    //menuConfig.backgroundColor = '#00FF00';
    //menuConfig.color = '#000';
    this.add.text(centerX, centerY - textSpacer*2, 'NEURO SIMULATOR', menuConfig).setOrigin(0.5);
    //menuConfig.backgroundColor = '#F3B141';
    //menuConfig.color = '#000';
    this.add.text(centerX, centerY, 'Use the ← → arrows to move & (F) to Fire', menuConfig).setOrigin(0.5);
    //menuConfig.backgroundColor = '#93C47D';
    //menuConfig.color = '#000';
    /* this.add.text(centerX, centerY + textSpacer, 'Press ← for Easy', menuConfig).setOrigin(0.5);
    menuConfig.backgroundColor = '#E06666';
    menuConfig.color = '#000';
    this.add.text(centerX, centerY + textSpacer*2, 'Press → for Hard', menuConfig).setOrigin(0.5);
    */
    //menuConfig.backgroundColor = '#F3B141';
    //menuConfig.color = '#000';
    this.add.text(centerX, centerY + textSpacer*3, 'Press [Space Bar] to continue', menuConfig).setOrigin(0.5);
    
    
    this.icon = this.add.image(37, 54, 'neuron', menuConfig).setScale(0.3, 0.3);
    this.icon = this.add.image(400, 194, 'neuron', menuConfig).setScale(0.3, 0.3);
    this.icon = this.add.image(529, 359, 'neuron', menuConfig).setScale(0.3, 0.3);
    this.icon = this.add.image(640, 154, 'neuron', menuConfig).setScale(0.3, 0.3);
    this.icon = this.add.image(150, 304, 'neuron', menuConfig).setScale(0.3, 0.3);
    this.icon = this.add.image(65, 440, 'neuron', menuConfig).setScale(0.3, 0.3);
    this.icon = this.add.image(510, 10, 'neuron', menuConfig).setScale(0.3, 0.3);


    // debug: move to next scene
    // this.scene.start("playScene");

    //keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    //keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    

    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            // easy mode
            game.settings = {
                spaceshipSpeed: 3,
                gameTimer: 60000
            }
                
        this.sound.play('sfx_select');
        this.scene.start("playScene");

        }
        /* if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            // hard mode
            game.settings = {
                spaceshipSpeed: 5, 
                gameTimer: 45000
            }
            this.sound.play('sfx_select');
            this.scene.start("playScene");
        */
            
        
        

    }
    }

