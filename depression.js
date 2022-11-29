function depression(){
let div;
let oneText = "15.2% of people\nages 8-25\nhave depression"
let twoText = "Women are\ntwice as likely\nas men\nto have depression"
let content = 'YOU ARE JUST LAZY';
let yStart = 0;
let customFont; 
let depressionImage;


customFont = loadFont('assets/Walkway_UltraBold.ttf');

this.setup = function() {
    //createCanvas(windowWidth,windowHeight)
    textFont(customFont)
    textAlign(CENTER, CENTER);
    textSize(30);
    noStroke;
    depressionImage = loadImage("assets/depression.png");
}

this.draw = function() {
    background(0);

    fill(120, 58, 97);
    textSize(32);
    textLeading(sin(frameCount*0.01)*100)
    text(oneText, 100, height/3,300,350)

    fill(6, 185, 237);
    textSize(32);
    textLeading(sin(frameCount*0.01)*100)
    text(twoText, 100, height/3,2250,350)

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