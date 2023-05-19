class Intro extends Phaser.Scene {
    constructor() {
        super('intro');
    }

    preload() {
    }

    create() {
        this.add.text(50, 50, 'Hello World').setFontSize(50);
    }
}

const game = new Phaser.Game({
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 500},
            debug: false
        }
    },

    scene: [Intro],
    title: "Adventure Game"
});