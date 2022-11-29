function ED(){
  let oneText = "Eating disorders\neffect at least 9%\nof the population\nworldwide"
  let twoText = "Among teens ages 13 to 18\n3.8% of females and\n1.5% of males are reported\nto have an eating disorder"
    let content = 'YOU LOOK SO HEALTHY, THOUGH';
    let yStart = 0;
    //let customFont; 
    let EDImage;

    //customFont = loadFont('AlexBrush-Regular.ttf');

    this.setup = function() {
        //createCanvas(windowWidth,windowHeight)
        //textFont(customFont);
        textAlign(CENTER, CENTER);
        textSize(20);
        EDImage = loadImage("assets/ED.png");
    }
    
    this.draw = function() {
        background(0)

    fill(137,106,156);
    textSize(32);
    textLeading(sin(frameCount*0.01)*100)
    text(oneText, 100, height/3,300,350)

    fill(156,39,227);
    textSize(32);
    textLeading(sin(frameCount*0.01)*100)
    text(twoText, 100, height/3,2300,350)

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