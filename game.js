class Intro extends Phaser.Scene {
    constructor() {
        super('intro');
    }

    preload() {
        this.load.path = "./assets/";
        this.load.image("ship", "ship.png");
    }

    create() {
        this.add.text(50, 50, 'Hello World').setFontSize(50);

        let ship = this.physics.add.sprite(400, 500, "ship")
            .setScale(1.25)
            .setCollideWorldBounds(true);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.input.keyboard.on('keydown', (event) => {
            if (event.key == 'a') {
                ship.setVelocityX(-200);
            } else if (event.key == 'd') {
                ship.setVelocityX(200);
            } else {
                ship.setVelocityX(0);
            }
        });

        this.input.keyboard.on('keyup', (event) => {
            if(event.key) {
                ship.setVelocityX(0);
            }
        });

        this.input.on('pointerdown', () => {
            let laser = this.physics.add.image(ship.x+4, ship.y, "laser").setVelocityY(-500);
            // this.time.delayedCall(6000, laser.destroy());
        });
    }
}

const game = new Phaser.Game({
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    physics: {
        default: 'arcade',
        arcade: {
            degug: false
        }
    },

    scene: [Intro],
    title: "Adventure Game"
});