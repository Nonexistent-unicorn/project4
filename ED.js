function ED(){
    let content = 'YOU LOOK SO HEALTHY, THOUGH';
    let yStart = 0;
    let customFont; 
    let EDImage;

    customFont = loadFont('AlexBrush-Regular.ttf');

    this.setup = function() {
        //createCanvas(windowWidth,windowHeight)
        textFont(customFont);
        textAlign(CENTER, CENTER);
        textSize(20);
        EDImage = loadImage("assets/ED.png");
    }
    
    this.draw = function() {
        background(0)
        for (let y = yStart; y < height; y +=28) {
            fill (255, y / 2 + 55, 100);
            text(content, width / 2, y);
        }
    yStart--;
      image(EDImage,500,150,500,500);
    }
    
    this.mouseClicked = function() {
      this.sceneManager.showScene(suicide)
    
    }
    }