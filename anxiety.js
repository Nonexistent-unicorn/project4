function anxiety(){
  let oneText = "19.1% of U.S. adults\nhad any anxiety disorder\nin the past year"
  let twoText = "Anxiety was higher\nin females (23.4%)\nthan in\nmales (14.3%)"
  let content = 'CALM DOWN, ITS NOT A BIG DEAL';
  let yStart = 0;
  //let customFont;
  let anxietyImage;
  
  //customFont = loadFont('assets/AlexBrush-Regular.ttf');

  this.setup = function() {
    //createCanvas(windowWidth,windowHeight)
    //textFont(customFont);
    textAlign(CENTER,CENTER);
    textSize(20);
    anxietyImage = loadImage("assets/anxiety.png");
  }
  
  this.draw = function() {
    background(0)

    fill(7, 217, 75);
    textSize(32);
    textLeading(sin(frameCount*0.01)*100)
    text(oneText, 100, height/3,300,350)

    fill(78, 93, 83);
    textSize(32);
    textLeading(sin(frameCount*0.01)*100)
    text(twoText, 100, height/3,2250,350)

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