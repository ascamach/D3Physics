const game = new Phaser.Game({
    type: Phaser.AUTO,
    width: 800,
    height: 800,

    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },

    scene: [Intro, Tutorial1, Action1, Action2, Ending],
    title: "Physics Game"
});