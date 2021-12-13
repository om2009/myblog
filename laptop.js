img = "";
status_lable = "";
function preload()
{
    img = loadImage("laptop.jpg");
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
    text("laptop",45,75);
    noFill();
    stroke("red");
    rect(20,100,450,370);
    
}

function back()
{
    window.open("index.html");
}