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
        this.scene.start('break1');
    });
}

function game_over() {
    this.cameras.main.fade(1000, 0, 0, 0);
    this.time.delayedCall(1000, ()=> {
        this.scene.start('game_over');
    });
}

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

function next_scene3() {
    this.cameras.main.fade(1000, 0, 0, 0);
    this.time.delayedCall(1000, ()=> {
        this.scene.start('break2');
    });
}

class Action2 extends Phaser.Scene {
    constructor() {
        super('action2');
    }

    preload() {
        this.load.path = "./assets/";
        this.load.image("ship", "ship.png");
        this.load.image("enemy", "enemy.png");
        this.load.image("goal", "goal.png");
        this.load.image("laser", "laser.png");
    }

    create() {

        let ship = this.physics.add.sprite(600, 700, "ship")
            .setScale(1.25)
            .setCollideWorldBounds(true);

        let enemy1 = this.physics.add.image(700, 185, "enemy")
            .setImmovable(true)
            .setScale(1.25)
            .setVelocityX(200)
            .setBounce(1)
            .setCollideWorldBounds(true);

        let enemy2 = this.physics.add.image(200, 400, "enemy")
            .setImmovable(true)
            .setScale(1.25)
            .setVelocityX(200)
            .setBounce(1)
            .setCollideWorldBounds(true);

        const rect1 = this.add.rectangle(200, 250, 400, 50, 0x5A5A5A);
        const rect2 = this.add.rectangle(600, 400, 50, 450, 0x5A5A5A);
        const rect3 = this.add.rectangle(550, 600, 500, 50, 0x5A5A5A);

        this.physics.add.existing(rect1);
        this.physics.add.existing(rect2);
        this.physics.add.existing(rect3);
        rect1.body.setImmovable(true);
        rect2.body.setImmovable(true);
        rect3.body.setImmovable(true);

        this.physics.add.collider(rect1, ship);
        this.physics.add.collider(rect2, ship);
        this.physics.add.collider(rect3, ship);

        let goal3 = this.physics.add.image(100, 100, "goal")
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

            this.physics.add.overlap(laser, enemy1, destroy_enemy, null, this);
            this.physics.add.overlap(laser, enemy2, destroy_enemy, null, this);
            this.physics.add.collider(laser, enemy1);
            this.physics.add.collider(laser, enemy2);

            this.physics.add.overlap(laser, rect1, laser_wall, null, this);
            this.physics.add.overlap(laser, rect2, laser_wall, null, this);
            this.physics.add.overlap(laser, rect3, laser_wall, null, this);
            this.physics.add.collider(laser, rect1);
            this.physics.add.collider(laser, rect2);
            this.physics.add.collider(laser, rect3);

            if (laser.y > this.game.config.height) {
                laser.destroy;
            } 
        });

        this.physics.add.overlap(ship, goal3, next_scene3, null, this);
        this.physics.add.collider(ship, goal3);

        this.physics.add.overlap(ship, enemy1, game_over, null, this);
        this.physics.add.overlap(ship, enemy2, game_over, null, this);
        this.physics.add.collider(ship, enemy1);
        this.physics.add.collider(ship, enemy2);
    }
}

function next_scene4() {
    this.cameras.main.fade(1000, 0, 0, 0);
    this.time.delayedCall(1000, ()=> {
        this.scene.start('finish');
    });
}

class Action3 extends Phaser.Scene {
    constructor() {
        super('action3');
    }

    preload() {
        this.load.path = "./assets/";
        this.load.image("ship", "ship.png");
        this.load.image("enemy", "enemy.png");
        this.load.image("goal", "goal.png");
        this.load.image("laser", "laser.png");
    }

    create() {

        let ship = this.physics.add.sprite(100, 700, "ship")
            .setScale(1.25)
            .setCollideWorldBounds(true);

        let enemy1 = this.physics.add.image(700, 150, "enemy")
            .setImmovable(true)
            .setScale(1.25)
            .setVelocityX(400)
            .setBounce(1)
            .setCollideWorldBounds(true);

        let enemy2 = this.physics.add.image(200, 400, "enemy")
            .setImmovable(true)
            .setScale(1.25)
            .setVelocityX(200)
            .setBounce(1)
            .setCollideWorldBounds(true);
            
        let enemy3 = this.physics.add.image(700, 100, "enemy")
            .setImmovable(true)
            .setScale(1.25)
            .setVelocityY(400)
            .setBounce(1)
            .setCollideWorldBounds(true);

        const rect1 = this.add.rectangle(250, 150, 50, 300, 0x5A5A5A);
        const rect2 = this.add.rectangle(600, 400, 50, 450, 0x5A5A5A);
        const rect3 = this.add.rectangle(275, 600, 600, 50, 0x5A5A5A);

        this.physics.add.existing(rect1);
        this.physics.add.existing(rect2);
        this.physics.add.existing(rect3);
        rect1.body.setImmovable(true);
        rect2.body.setImmovable(true);
        rect3.body.setImmovable(true);

        this.physics.add.collider(rect1, ship);
        this.physics.add.collider(rect2, ship);
        this.physics.add.collider(rect3, ship);

        let goal3 = this.physics.add.image(100, 100, "goal")
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

            this.physics.add.overlap(laser, enemy1, destroy_enemy, null, this);
            this.physics.add.overlap(laser, enemy2, destroy_enemy, null, this);
            this.physics.add.overlap(laser, enemy3, destroy_enemy, null, this);
            this.physics.add.collider(laser, enemy1);
            this.physics.add.collider(laser, enemy2);
            this.physics.add.collider(laser, enemy3);

            this.physics.add.overlap(laser, rect1, laser_wall, null, this);
            this.physics.add.overlap(laser, rect2, laser_wall, null, this);
            this.physics.add.overlap(laser, rect3, laser_wall, null, this);
            this.physics.add.collider(laser, rect1);
            this.physics.add.collider(laser, rect2);
            this.physics.add.collider(laser, rect3);

            if (laser.y > this.game.config.height) {
                laser.destroy;
            } 
        });

        this.physics.add.overlap(ship, goal3, next_scene4, null, this);
        this.physics.add.collider(ship, goal3);

        this.physics.add.overlap(ship, enemy1, game_over, null, this);
        this.physics.add.overlap(ship, enemy2, game_over, null, this);
        this.physics.add.overlap(ship, enemy3, game_over, null, this);
        this.physics.add.collider(ship, enemy1);
        this.physics.add.collider(ship, enemy2);
        this.physics.add.collider(ship, enemy3);
    }
}