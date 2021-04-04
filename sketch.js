var balloon, background;
var database,height;
var backgroundImg,balloonImage;
function preload() {
  backgroundImg = loadImage("cityImage.png")
  balloonImage = loadAnimation("hotairballoon1.png", "hotairballoon2.png", "hotairballoon3.png");
}

function setup(){
   database = firebase.database();
   console.log(database);
    createCanvas(500,500);

balloon = createSprite (100,400, 20, 20)
  balloon.addAnimation("balloon", balloonImage);
  balloon.scale = 0.4;


}

function draw(){

    background(backgroundImg);
  
        if(keyDown(LEFT_ARROW)){
            updateHeight(10,0);
        }
        else if(keyDown(RIGHT_ARROW)){
          updateHeight(-10,0);
        }
        else if(keyDown(UP_ARROW)){
          updateHeight(0,-10);
        }
        else if(keyDown(DOWN_ARROW)){
          updateHeight(0,10);
        }
        drawSprites();
    }

    function updateHeight (x,y)
{
database.ref('balloon/height').set({
  'x':height.x+x,
  'y':height.y+y
})
}

function readHeight(data)
{
height = data.val();
height.x =balloon.x;
height.y = balloon.y;
}
function Showerror ()
{
console.log("Error in writing to database");
}



    


