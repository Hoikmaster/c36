var database ,dog,dog1img,dog2img
var position

var feed,add
var foodobject
var Feedtime
var Lastfeed
//Create variables here

function preload()

{
  dog1img = loadImage("Images/Dog.png")
  dog2img = loadImage("Images/happy dog.png")
	//load images here
}

function setup() {
  database = firebase.database();
	createCanvas(1000, 500);
 
  foodobject=new Food()
  dog = createSprite(550,250,10,10);
  dog.addImage(dog1img)
  dog.scale=0.15
  
 

 // var dog = database.ref('Food');
 // dog.on("value", readPosition, showError);
feed = createButton("FEED DOG")
feed.position(500,15)
feed.mousePressed(FeedDog)
add = createButton("ADD FOOD")
add.position(400,15)
add.mousePressed(AddFood)

} 

function draw(){
  background(46,139,87);
 foodobject.display()
 
 
 drawSprites();
  
  fill(255,255,254);
 textSize(15);

drawSprites();
}
function readPosition(data){
  position = data.val();
  foodobject.updateFoodStock(position)
  console.log(position.x);
  
}

function AddFood(){
position++
database.ref('/').update({
  Food:position
}
)
}
function FeedDog(){

dog.addImage(dog2img)
foodobject.updateFoodStock(foodobject.getFoodStock()-1)
 database.ref('/').update({
   Food:foodobject.getFoodStock(),
   FeedTime:hour ()
 })
}