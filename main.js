// Create a reference for the canvas
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}
function aplhabetkey()
{
	//upload respective image with the message.
	img_image = "Alpkey.png";
	add(); 

}
function numberkey()
{
	img_image = "numkey.png";
	add();	
}
function arrowkey()
{
	img_image = "Arrkey.png";
	add();
}
function specialkey()
{
	img_image = "spkey.png";
	add();
	
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}

//Write a code to grab the key-pressed event
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >='97' && keyPressed<='122')|| (keyPressed >='65' && keyPressed<='90'))
		{
			aplhabetkey();
			console.log("aplhabet key");
			document.getElementById("d1").innerHTML = "you have preesed aplhabet key";
		}
		if (keyPressed >= '48' && keyPressed<='57')
		{
			numberkey();
			console.log("number key");
			document.getElementById("d1").innerHTML = "you have preesed number key";
		}
		if (keyPressed >= '37' && keyPressed<='40')
		{
			arrowkey();
			console.log("arrow key");
			document.getElementById("d1").innerHTML = "you have preesed arrow key";
		}
		if ((keyPressed == '17' && keyPressed == '18' && keyPressed == '27'))
		{
			specialkey();
			console.log("special key");
			document.getElementById("d1").innerHTML = "you have preesed special key";
		}
		//write a code to check the type of key pressed
	else
	{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	}
}


