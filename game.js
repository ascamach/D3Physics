class Intro extends Phaser.scene {
    constructor() {
        super('intro');
    }

    create() {
        this.add.text(50, 50, 'Hello').setFontSize(50);
    }
}

const game = new Phaser.Game({
    scale: {
        mode: Phaser.scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 800,
        height: 600
    },

    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 500},
            debug: false
        }
    },

    scene: [],
    title: "Adventure Game"
});