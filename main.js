var canvas= new fabric.Canvas('mycanvas');

var block_width = 30;
var block_height= 30;
var player_x= 10;
var player_y= 10;
var player_object= "";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
player_object= Img;
player_object.scaleToWidth(100);
player_object.scaleToHeight(100);
player_object.set({
    top:player_y,
    left:player_x
  });
    
    canvas.add(player_object);
});
}
var block_object="";
function block_update(get_image){
    fabric.Image.fromURL(get_image,function(Img){
      block_object= Img;
      block_object.scaleToWidth(block_width);
      block_object.scaleToHeight(block_height);
      block_object.set({
        top:player_y,
        left:player_x
      });
    
    canvas.add(block_object);
  });
}

window.addEventListener("keydown",key_down );
function key_down(e)
{
  var keypressed= e.keyCode;
  console.log(keypressed);
  if(e.shiftKey==true && keypressed=="80"){
    console.log("Shift and p pressed together");
    block_width= block_width+10;
    block_height= block_height+10;
    document.getElementById("current_width").innerHTML=block_width;
    document.getElementById("current_height").innerHTML=block_height;
  }

  if(e.shiftKey==true && keypressed=="77"){
    console.log("Shift and m pressed together");
    block_width= block_width-10;
    block_height= block_height-10;
    document.getElementById("current_width").innerHTML=block_width;
    document.getElementById("current_height").innerHTML=block_height;
  }

 if(keypressed=="8"){
   console.log("erasing");
   erase();
 }
  if(keypressed=="38"){
    console.log("up");
    up();
  }

  if(keypressed=="40"){
    console.log("down");
    down();
  }

  if(keypressed=="37"){
    console.log("left");
    left();
  }

  if(keypressed=="39"){
    console.log("right");
   right();
  }

  if(keypressed=="84"){
    block_update("trunk.jpg")
    console.log("t");
  }

  if(keypressed=="68"){
    block_update("dark_green.png")
    console.log("d");
  }

  if(keypressed=="76"){
    block_update("light_green.png")
    console.log("l");
  }

  if(keypressed=="71"){
    block_update("ground.png")
    console.log("g");
  }

  if(keypressed=="87"){
    block_update("wall.jpg")
    console.log("w");
  }

  if(keypressed=="89"){
    block_update("yellow_wall.png")
    console.log("y");
  }

  if(keypressed=="82"){
    block_update("roof.jpg")
    console.log("r");
  }

  if(keypressed=="67"){
    block_update("cloud.jpg")
    console.log("c");
  }

  if(keypressed=="85"){
    block_update("unique.png")
    console.log("u");
  }

}
function up(){
  if(player_y>=0){
    player_y= player_y-block_height;
    console.log("when up arrow key pressed, x="+player_x+" y="+ player_y);
    canvas.remove(player_object);
    player_update();
  }
}

function down(){
  if(player_y<=460){
    player_y= player_y+block_height;
    console.log("when down arrow key pressed, x="+player_x+" y="+ player_y);
    canvas.remove(player_object);
    player_update();
  }
}

function left(){
  if(player_x>=0){
    player_x= player_x-block_width;
    console.log("when left arrow key pressed, x="+player_x+" y="+ player_y);
    canvas.remove(player_object);
    player_update();
  }
}

function right(){
  if(player_x<=900){
    player_x= player_x+block_width;
    console.log("when right arrow key pressed, x="+player_x+" y="+ player_y);
    canvas.remove(player_object);
    player_update();
  }
}

function erase(){
  canvas.remove(block_object);
}