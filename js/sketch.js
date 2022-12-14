var characterX = 90;
var characterY = 90;
var characterW = 90;
var characterZ = 90;

var w = 87;
var s = 83;
var a = 65;
var d = 68;

var shapeX = 30;
var shapeY = 50;
var shapeW = 30;
var shapeZ = 50;

var shapeXs = [];
var shapeYs = [];
var shapeWs = [];
var shapeWs = [];

var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];
var shapeWSpeeds = [];
var shapeZSpeeds = [];

var mouseShapeX;
var mouseShapeY;
var mouseShapeW;
var mouseShapeZ;

function setup() {
    createCanvas(600, 1000);
    for (var i = 0; i < 21; i++) {
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 2)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
        shapeXs[i] = getRandomNumber(200);
        shapeYs[i] = getRandomNumber(500);
        diameters[i] = getRandomNumber(55);
    }

    createCharacter(400, 610);
    fill(300,20,400);
}

function draw() {
    background(20, 55, 378);
    stroke(100);
    fill(500,20,300);

   
    createBorders(21);

    
    textSize(10);
    fill(222,323,22);
    text("FREEDOM", width - 50, height/ 1- 50)

    textSize(12);
    fill(222,323,22);
    text("death", width - 50, height / 5 - 150);

    textSize(25);
    fill(522,23,242);
    text("THE PARTY OF THE YEAR", width / 2 - 80, height / 5 - 150);

  

    drawCharacter();
    characterMovement();
    

    for (var i = 0; i < shapeXs.length; i++) {
        fill (113, 45, 44);
        square(shapeXs[i], shapeYs[i], diameters[i]);
        fill(22,33,44);
        circle(shapeXs[i], shapeYs[i], diameters[i]);
        fill (313, 245, 144);
        circle(shapeXs[i], shapeYs[i], diameters[i]);
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);


        shapeXs[i] += shapeXSpeeds[i];
        shapeYs[i] += shapeYSpeeds[i];
        

        if (shapeXs[i] > width) {
            shapeXs[i] = 0;
        }
        if (shapeXs[i] < 0) {
            shapeXs[i] = width;
        }
        if (shapeYs[i] > height) {
            shapeYs[i] = 0;
        }
        if (shapeYs[i] < 0) {
            shapeYs[i] = height;
        }
    }

    if (characterX > width && characterY > width - 50) {
        fill(500,200,30);
        stroke(4);
        textSize(62);
        text("Winner Winner!", width / 3 - 50, height / 3 - 50);

        textSize(22);
        fill(222,323,22);
        text("the game of legendary shapes...", width / 2 - 50, height / 2 - 150);
    }

 
    fill(120, 20, 420);
    circle(mouseShapeX, mouseShapeY, 45);
    fill(520, 120, 380);
    square(mouseShapeX, mouseShapeY, 55);
    fill(330, 520, 420);
    circle(mouseShapeX, mouseShapeY, 25);
    fill(330, 520, 420);
    circle(mouseShapeW, mouseShapeX, 65);
    
}

function characterMovement() {
    // handle the keys
    if (keyIsDown(w)) {
        characterY -= 20;
    }
    if (keyIsDown(s)) {
        characterY += 19;
    }
    if (keyIsDown(a)) {
        characterX -= 30;
        console.log("movement: " + characterX);
    }
    if (keyIsDown(d)) {
        characterX += 40;

           if (keyIsDown(w)) {
        characterY -= 10;
    }
    if (keyIsDown(s)) {
        characterY += 10;
    }
    if (keyIsDown(a)) {
        characterX -= 10;
        console.log("movement: " + characterX);
    }
    if (keyIsDown(d)) {
        characterX += 20;
    }
    }
}

function createCharacter(x, y) {
    characterX = x;
    characterY = y;
}

function drawCharacter() {
    fill(123, 443, 423);
    circle(characterX, characterY, 44);
    fill(22,33,421);
    square(characterX,characterY,17);
}

function createBorders(thickness) {
   
    rect(0, 0, width-25, thickness);
    rect(0, 0, thickness, height-20);
    rect(0, height -10, width, thickness);
    rect(width -5,  0, thickness, height - 90);
}

function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
    mouseShapeW = mouseW;
    mouseShapeZ = mouseShapeZ;
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}