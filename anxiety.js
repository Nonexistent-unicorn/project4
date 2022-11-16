function anxiety(){
  let anxietyImage;
  /*this.preload = function() {
  anxietyImage = loadImage("assets/anxiety.png");
  }*/
  this.setup = function() {
    //createCanvas(windowWidth,windowHeight)
    anxietyImage = loadImage("assets/anxiety.png");
  }
  
  this.draw = function() {
    background(0)
    image(anxietyImage,500,150,500,500);
  }
  
  this.mouseClicked = function() {
    this.sceneManager.showScene(ED)
  
  }
  }