class Break1 extends Phaser.Scene {
    constructor() {
        super('break1');
    }

    create() {
        this.add.text(25, 50, "Well done, you made it to the\nfirst goal splendidly.").setFontSize(25);

        this.add.text(25, 150, "Unfortunately, your clients\nwant you to move again!").setFontSize(25);

        this.time.delayedCall(2000, () => {
            this.add.text(25, 600, "(Click to continue.)").setFontSize(20);
            this.input.on('pointerdown', () => {
                this.scene.start('action2');
            });
        });
    }
}

class Break2 extends Phaser.Scene {
    constructor() {
        super('break2');
    }

    create() {
        this.add.text(25, 50, "Great job hitting those moving targets!").setFontSize(25);
        this.add.text(25, 150, "Yet again, your clients want you to move\none last time.").setFontSize(25);

        this.add.text(25, 250, "Good luck, this is your final mission!").setFontSize(25);

        this.time.delayedCall(2000, () => {
            this.add.text(25, 600, "(Click to continue.)").setFontSize(20);
            this.input.on('pointerdown', () => {
                this.scene.start('action3');
            });
        });
    }
}