let mgr;

function setup() {
createCanvas(windowWidth,windowHeight)
mgr = new SceneManager();
mgr.wire();
mgr.showScene(depression);

}

function draw() {
mgr.draw();  
}