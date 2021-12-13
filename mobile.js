img = "";
status_lable = "";
function preload()
{
    img = loadImage("mobile.jpg");
}

function setup()
{
    canvas = createCanvas(500, 500);
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
    image(img,0,0,500, 500);
    fill("red");
    text("Mobile",45,75);
    noFill();
    stroke("red");
    rect(20,100,470,250);
    
}

function back()
{
    window.open("index.html");
}