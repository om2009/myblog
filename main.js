objects = [];
video = "";
status_label = "";
percent = 0;
function preload()
{
    
}


function setup()
{
    canvas = createCanvas(480, 400);
    canvas.center();
    video = createVideo("video.mp4");
    video.hide();
    video.play();
    video.loop();
    video.volume(0);
    video.speed(1);
}

function draw()
{
    image(video, 0, 0, 480, 400);
    if(status_label == true)
    {
        objectDetector.detect(video, gotResult);
        for(i=0; i<objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Object dectected";
            document.getElementById("number_of_object").innerHTML = objects.length;
            percent = floor(objects[i].confidence * 100);
            fill('red');
            text(objects[i].label + " " + percent + "%", objects[i].x +15, objects[i].y+15); 
            nofill();
            strock("red");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = " status : detecting object";
    //video.play();
}

function modelLoaded()
{
    console.log("model is ready");
    status_label = true;
    video.loop();
    video.volume(0);
    video.speed(1);
}
function gotResult(error, result)
{
    if(error)
    {
        console.error(error);

    }
    console.log(result);
    objects = result;
}

