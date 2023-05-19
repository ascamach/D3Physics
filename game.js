class Intro extends Phaser.Scene {
    constructor() {
        super('intro');
    }

    preload() {
        this.load.tilemapTiledJSON('first_level', 'assets/first_level.json');
        this.load.image('tiles', 'assets/tiles.png', {
            frameWidth: 16,
            frameHeight: 16,
        });
    }

    create() {
        this.add.text(50, 50, 'Hello World').setFontSize(50);

        const map = this.make.tilemap({key: 'first_level'});

        this.tiles = this.map.addTilesetImage('tiles', 'tiles');

        groundLayer = map.createDynamicLayer('World', groundTiles, 0, 0);

        groundLayer.setCollisionByExclusion([-1]);

        this.physics.world.bounds.width = groundLayer.width;
        this.physics.world.bounds.height = groundLayer.height
    }

    update() {
        
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