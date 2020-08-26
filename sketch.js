//Create variables here
var dog , database , happyDog , foodS , dogImage


function preload()
{
dogImage = loadImage("images/dog.png");

happyImage = loadImage("images/happyDog.png");
}

function setup() {
  createCanvas(500, 500);
  
   dog = createSprite(250,250,10,10);
   dog.scale = 0.2;
   dog.addImage("dog" , dogImage)
  
   database = firebase.database();
   foodStock = database.ref('Food');
   foodStock.on("value",readStock);
   
}


function draw() {  

 background(46,139,87);

 if(keyWentUp(UP_ARROW)){
  writeStock(foodS);
  dog.addImage("dog" , happyImage);
 }

  drawSprites();
  
 textSize(20);
 fill("white");
 text("FOOD REMAINING : " + foodS,100,100);
 text("Press up arrow to feed TOTO milk",100,50);

}

function readStock(data){
foodS = data.val();
}

function writeStock(x){
  if(x <=0){
    x = 0;
  }
  else{
    x = x-1;
  }

  database.ref('/').update({
    Food : x
  });
}


