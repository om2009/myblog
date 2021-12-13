img = "";
status_lable = "";
function preload()
{
    img = loadImage("bottel.jpeg");
}

function setup()
{
    canvas = createCanvas(450, 550);
    canvas.center();
    objectDetector = ml5.objectDetector('cococssd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : detecting object";

}

function modelLoaded()
{
    console.log("model is ready");
    status_lable = true;
    objectDetector.detect(img, gotResult);
}


function gotResult(error, result)
{
    if(error)
    {
        console.error(error);

    }else{
        console.log(result);

    }
}

function draw()
{
    image(img,0,0,450, 550);
    fill("red");
    text("Bottel",45,75);
    noFill();
    stroke("red");
    rect(77,20,270,470);
    
}

function back()
{
    window.open("index.html");
}