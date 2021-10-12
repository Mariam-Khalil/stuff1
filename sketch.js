var box;

function setup() {
  createCanvas(500,500);
  box = createSprite (250,250,20,20);
}

function draw() 
{
  background(mouseY,mouseX,mouseY);
  if (keyIsDown(RIGHT_ARROW)){
    box.position.x+=5;
  } 
drawSprites();
}
