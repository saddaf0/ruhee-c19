var scene, sceneImg
var player, playerImg;
var titan,titanImg,titanGroup;
var invisibleBlock, invisibleBlock2;
var gameOver, gameOver_Img
var gameState= "play"


function preload(){
    sceneImg= loadImage("bg.png");
    playerImg= loadImage("character.png");
    titanImg= loadImage("titan.png");
    gameOver_Img= loadImage("gameOver.png");

}

function setup() {
    createCanvas(1500,1500);
    scene= createSprite(200,200,1500,1500);
    scene.addImage("abc",sceneImg);
   scene.velocityX=-2
   scene.scale=2
 
player= createSprite(100,300);
player.addImage("abc",playerImg);
player.scale= 0.45

gameOver= createSprite(200,200)


invisibleBlock= createSprite(50,50,300,10)
 invisibleBlock2= createSprite(50,390,300,10)
    
titanGroup= new Group()
}

function draw() {

//background(sceneImg)
    if(keyDown("Space")){
        player.velocityY = -5;
    }
if(scene.x<400){
    scene.x=scene.width/2
}
if(invisibleBlock.isTouching(player)){

    player.velocityY= 5
}

    if(player.isTouching(titanGroup)){

        titan.destroyEach();
        player.destroy();
      

    }
   

    spawnTitans()

 drawSprites()
}

function spawnTitans(){

    if(frameCount%150===0){
        titan= createSprite(400,310,10,10)
        titan.addImage("abc",titanImg)
        titan.scale= 0.2
        titan.velocityX= -3
        titanGroup.add(titan)
    }
}
