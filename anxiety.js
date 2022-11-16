function anxiety(){
  let img;
  this.preload = function() {
  img = loadImage("assets/anxiety.png");
  }
  this.enter = function() {
    createCanvas(windowWidth,windowHeight)
    //background(0)
  }
  
  this.draw = function() {
    image(img,500,150,500,500);
  }
  
  this.mouseClicked = function() {
    this.sceneManager.showScene(ED)
  
  }
  }