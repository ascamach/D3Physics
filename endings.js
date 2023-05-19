class Game_Over extends Phaser.Scene {
    constructor() {
        super('game_over');
    }

    create() {
        this.add.text(25, 100, "Unfortunately, you were caught by\nthe monsters in space.").setFontSize(25);

        this.time.delayedCall(2000, () => {
            this.add.text(25, 400, "Click to restart.").setFontSize(25);
            this.input.on('pointerdown', () => {
                this.scene.start('action1');
            })
        });
    }
}

class Finish extends Phaser.Scene {
    constructor() {
        super('finish');
    }

    create() {
        this.add.text(25,50, "Congratulations, you finished the game!").setFontSize(25);
        this.add.text(25, 150, "Your clients are satisfied with your piloting!").setFontSize(25);
        
        this.time.delayedCall(1000, () => {
            this.add.text(25, 400, "Click to play again!").setFontSize(25);
            this.input.on('pointerdown', () => {
                this.scene.start('intro');
            })
        })
    }
}