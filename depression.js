function depression(){
let content = 'YOU ARE JUST LAZY';
let yStart = 0;
//let customFont; 
let depressionImage;




this.setup = function() {
    //createCanvas(windowWidth,windowHeight)
    //customFont = loadFont('AlexBrush-Regular.ttf');
    textSize(30);
    textAlign(CENTER, CENTER);
    noStroke;
    depressionImage = loadImage("assets/depression.png");
}

this.draw = function() {
    background(0);
    
    for (let y = yStart; y < height; y +=28) {
        fill (255, y / 2 + 55, 100);
        text(content, width/2, y);
    }
yStart--;

  image(depressionImage,500,150,500,500);
}


this.mouseClicked = function() {
  this.sceneManager.showScene(anxiety);
}
}