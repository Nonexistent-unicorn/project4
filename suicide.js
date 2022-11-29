function suicide(){
    let font;
    let suicideImage;

    let offset = 0.0;
    
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
        'Suicide is the 3rd\nleading cause of death\nfor 15 to 24 year old\nAmericans.',
        width/4,
        height/2,
        color(46,100,100,100)
      )
      image(suicideImage,700,90,700,700);
    
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

    function flickering(){
        offset += 0.08;
        let n = noise(offset);
        if(n < 0.30) return 0;
        else return 100;
      }

    function glow(glowColor, blurriness){
        drawingContext.shadowBlur = blurriness;
        drawingContext.shadowColor = glowColor;
      }
    
    }
    
    this.mouseClicked = function() {
      //this.sceneManager.showScene(depression)
    
    }
    }