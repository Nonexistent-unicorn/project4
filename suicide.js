function suicide(){
    let suicideImage;
    /*this.preload = function() {
    suicideImage = loadImage("assets/suicide.png");
    }*/
    this.setup = function() {
        //createCanvas(windowWidth,windowHeight)
        suicideImage = loadImage("assets/suicide.png");
    }
    
    this.draw = function() {
        background(0)
      image(suicideImage,500,150,500,500);
    }
    
    this.mouseClicked = function() {
      this.sceneManager.showScene(depression)
    
    }
    }