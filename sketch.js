let mgr;

function setup() {
createCanvas(windowWidth,windowHeight)
mgr = new sceneManager();
mgr.wire();
mgr.showScene(depression);

}

function draw() {
mgr.draw();  
}