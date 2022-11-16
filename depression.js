function depression(){
let depressionImage;
/*this.preload = function() {

}*/
this.setup = function() {
    //createCanvas(windowWidth,windowHeight)
    depressionImage = loadImage("assets/depression.png");
}

this.draw = function() {
    background(0)
  image(depressionImage,500,150,500,500);
}

this.mouseClicked = function() {
  this.sceneManager.showScene(anxiety);

}
}