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

    scene: [Intro, Tutorial1, Action1, Break1, Action2, Break2, Action3, Game_Over, Finish],
    title: "Physics Game"
});