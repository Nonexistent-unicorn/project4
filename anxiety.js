function anxiety(){
  let content = 'CALM DOWN, ITS NOT A BIG DEAL';
  let yStart = 0;
  let customFont;
  let anxietyImage;
  
  customFont = loadFont('AlexBrush-Regular.ttf');

  this.setup = function() {
    //createCanvas(windowWidth,windowHeight)
    textFont(customFont);
    textAlign(CENTER,CENTER);
    textSize(20);
    anxietyImage = loadImage("assets/anxiety.png");
  }
  
  this.draw = function() {
    background(0)
    for (let y = yStart; y < height; y +=28){
      fill (255, y / 2 + 55, 100);
      text(content, width / 2, y);
    }
   yStart--; 
    image(anxietyImage,500,50,500,700);
  }
  
  this.mouseClicked = function() {
    this.sceneManager.showScene(ED)
  
  }
  }