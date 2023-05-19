class Intro extends Phaser.Scene {
    constructor() {
        super('intro');
    }

    preload() {
        this.load.path = "./assets/";
        this.load.image("logo", "logo.png");
    }

    create() {
        // this.add.text(100, 100, "test intro");

        let logo = this.add.image(game.canvas.width/2, -600, "logo");

        this.tweens.add({
            targets: logo,
            y: game.canvas.height/2,
            alpha: 1,
            delay: 1000,
            duration: 2000,
            ease: "SineIn",
            repeat: 0
        });
        
        this.time.delayedCall(4000, () => {
            this.add.text(225, 700, "Click anywhere to begin.").setFontSize(25);
            this.input.on('pointerdown', () => this.scene.start('tutorial1'));
        });
    }
};

function next_scene1() {
    this.cameras.main.fade(1000, 0, 0, 0);
    this.time.delayedCall(1000, () => {
        this.scene.start('action1');
    });
};

class Tutorial1 extends Phaser.Scene {
    constructor() {
        super('tutorial1');
    }

    preload() {
        this.load.path = "./assets/";
        this.load.image("ship", "ship.png");
        this.load.image("goal", "goal.png");
    }

    create() {
        let ship = this.physics.add.image(400, 700, "ship");

        this.add.text(150, 400, "Use WASD to move.\nYour goal is to touch the green goal!")
            .setFontSize(25);

        let goal1 = this.physics.add.image(400, 100, "goal")
            .setImmovable(true)
            .setScale(1.25);

        this.physics.add.overlap(ship, goal1, next_scene1, null, this);
        this.physics.add.collider(ship, goal1);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.input.keyboard.on('keydown', (event) => {
            if (event.key == 'a') {
                ship.setVelocityX(-200);
            } else if (event.key == 'd') {
                ship.setVelocityX(200);
            } else if (event.key == 's') {
                ship.setVelocityY(200);
            } else if (event.key == 'w') {
                ship.setVelocityY(-200);
            }
        });

        this.input.keyboard.on('keyup', (event) => {
            if(event.key) {
                ship.setVelocityX(0);
                ship.setVelocityY(0);
            }
        });
    }
}