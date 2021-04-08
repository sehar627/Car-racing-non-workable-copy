var database;
var PlayerCount;
var GameState = 0;
var player;
var form, game;
var playerInfo;
var playerCar1, playerCar2, playerCar3, playerCar4;
var Cars;

function setup(){
    createCanvas(displayWidth-20, displayHeight-30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.CallStart();
}

function draw(){
    background("white");
    if(PlayerCount === 4) {
        game.updateState(1);
    }
    if(GameState === 1) {
        game.Play();
    }
}
