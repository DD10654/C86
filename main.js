var canvas = new fabric.Canvas("myCanvas");

width = 30;
height = 30;
var player_object;
var block_object;

playerX = 100;
playerY = 100;

function playerUpdate() {
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:playerY,
            left:playerX
        });
        canvas.add(player_object);
    });
};

function newImage(getImage) {
    fabric.Image.fromURL(getImage, function(Img){
        block_object = Img;
        block_object.scaleToWidth(150);
        block_object.scaleToHeight(150);
        block_object.set({
            top:playerY,
            left:playerX
        });
        canvas.add(block_object);
    });
};