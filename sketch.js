var car,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  car= createSprite(400, 200, 50, 50);
  car.shapeColor="blue";
  car.velocityX=-5;
  wall=createSprite(10,200,20,400);
  car.debug=true;
  wall.debug=true;
  speed= random(55,120);
  weight=random(400,2000);
}
//console.log(deformation);
function draw() {
  background(255,255,255);  
  drawSprites();
  if(car.x-wall.x<=(wall.width+car.width)/2){
    var deformation=(0.5*weight*speed*speed)/22500;
    car.velocityX=0;
    if(deformation<80){
      car.shapeColor=color(0,255,0);
    }
    else if(deformation>80 && deformation<180){
        car.shapeColor=color(230,230,0);
    }
    else if(deformation>180){
      car.shapeColor=color(255,0,0);
    }
      
    }
  }
    
