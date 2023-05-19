class Action1 extends Phaser.Scene {
    constructor() {
        super('action1');
    }

    preload() {
        this.load.path = "./assets/";
        this.load.image("ship", "ship.png");
        this.load.image("enemy", "enemy.png");
        this.load.image("goal", "goal.png");
        this.load.image("laser", "laser.png");
    }

    create() {
        let ship = this.physics.add.sprite(400, 700, "ship")
            .setScale(1.25)
            .setCollideWorldBounds(true);

        let enemy = this.physics.add.image(700, 100, "enemy")
            .setImmovable(true)
            .setScale(1.25);
        /* Old Enemy Behavior
        *  Saving for reference
            .setScale(1.25)
            .setVelocityX(200)
            .setBounce(1)
            .setCollideWorldBounds(true);
        */

        this.add.text(50, 600, "Press left click to fire lasers.\nTouching enemies will trigger a game over.").setFontSize(25);

        const rect1 = this.add.rectangle(300, 400, 600, 50, 0x5A5A5A);
        const rect2 = this.add.rectangle(600, 300, 50, 250, 0x5A5A5A);

        this.physics.add.existing(rect1);
        this.physics.add.existing(rect2);
        rect1.body.setImmovable(true);
        rect2.body.setImmovable(true);

        this.physics.add.collider(rect1, ship);
        this.physics.add.collider(rect2, ship);

        let goal2 = this.physics.add.image(100, 100, "goal")
            .setImmovable(true)
            .setScale(1.5);

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

        this.input.on('pointerdown', () => {
            let laser = this.physics.add.image(ship.x+4, ship.y, "laser")
                .setScale(1.25)
                .setVelocityY(-500);

            this.physics.add.overlap(laser, enemy, destroy_enemy, null, this);
            this.physics.add.collider(laser, enemy);

            this.physics.add.overlap(laser, rect1, laser_wall, null, this);
            this.physics.add.overlap(laser, rect2, laser_wall, null, this);
            this.physics.add.collider(laser, rect1);
            this.physics.add.collider(laser, rect2);

            if (laser.y > this.game.config.height) {
                laser.destroy;
            } 
        });

        this.physics.add.overlap(ship, goal2, next_scene2, null, this);
        this.physics.add.collider(ship, goal2);

        this.physics.add.overlap(ship, enemy, game_over, null, this);
        this.physics.add.collider(ship, enemy);
    }
}

class Ending extends Phaser.Scene {
    constructor() {
        super('ending');
    }

    create() {
        this.add.text(100, 100, "test ending");
    }
}

function destroy_enemy(laser, enemy) {
    laser.destroy();
    enemy.destroy();
}

function laser_wall(laser, wall) {
    laser.destroy();
}

function next_scene2() {
    this.cameras.main.fade(1000, 0, 0, 0);
    this.time.delayedCall(1000, ()=> {
        this.scene.start('action2');
    });
}

function game_over() {
    this.cameras.main.fade(1000, 0, 0, 0);
    this.time.delayedCall(1000, ()=> {
        this.scene.start('ending');
    });
}