class Action2 extends Phaser.Scene {
    constructor() {
        super('action2');
    }

    create() {
        this.add.text(50, 50, "this is action 2");
    }
}