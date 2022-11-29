function suicide(){
    let font;
    
    let suicideImage;

    
    font = loadFont('assets/AlexBrush-Regular.ttf')

    this.setup = function() {
       colorMode(HSB, 360, 100, 100, 100);

       noFill()
       stroke(255);
       strokeWeight(2);

       textFont(font);
       textAlign(CENTER, CENTER);
       textSize(75);

       

        suicideImage = loadImage("assets/suicide.png");
    }
    
    this.draw = function() {
        background(0)
      textNeon(
        'Suicide is the 3rd\nleading cause of death\nfor 15 to 24 year old\nAmericans.\n1-800-273-8255',
        width/4,
        height/2,
        color(46,100,100,100)
      )

      image(suicideImage,650,0,850,850);
    
      function textNeon(glowText, x, y, glowColor){
        glow(glowColor, 400);
        text(glowText, x, y);
        text(glowText, x, y);
        text(glowText, x, y);
        glow(glowColor, 80);
        text(glowText, x, y);
        text(glowText, x, y);
        glow(glowColor, 12);
        text(glowText, x, y);
        text(glowText, x, y);
        text(glowText, x, y);
    }
      }

    function glow(glowColor, blurriness){
        drawingContext.shadowBlur = blurriness;
        drawingContext.shadowColor = glowColor;
      }
    
    }
    
    this.mouseClicked = function() {
      //this.sceneManager.showScene(depression)
    
    }