function ED(){
    let EDImage;
    /*this.preload = function() {
    EDImage = loadImage("assets/ED.png");
    }*/
    this.setup = function() {
        //createCanvas(windowWidth,windowHeight)
        EDImage = loadImage("assets/ED.png");
    }
    
    this.draw = function() {
        background(0)
      image(EDImage,500,150,500,500);
    }
    
    this.mouseClicked = function() {
      this.sceneManager.showScene(ED)
    
    }
    }