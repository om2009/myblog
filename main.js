status_lable = "";
object = [];
percent = "";
song = "";
function preload()
{
    song = loadSound("alarm.mp3");
    
}

function setup()
{
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
    objectDetector = ml5.objectDetector('cococssd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : detecting object";

}

function modelLoaded()
{
    console.log("model is ready");
    status_lable = true;
    objectDetector.detect(video, gotResult);
}


function gotResult(error, result)
{
    if(error)
    {
        console.error(error);

    }else{
        console.log(result);
        object = result;
    }
}

function draw()
{
    image(video,0,0,380, 380);
    if(status_lable != "")
    {
        objectDetector.detect(video, gotResult);
        for(i=0; i<object.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Object detected";
            document.getElementById("number_of_objects").innerHTML = "Number of detected objects : " + object.length;
            fill("red");
            percent = floor(object[i].confidence*100);
            text(object[i].label+" "+percent+"%", object[i].x+15, object[i].y+15);
            noFill();
            stroke("red");
            rect(object[i].x,object[i].y,object[i].width,object[i].height);
            if(object[i].label == 'person')
            {
                song.stop();
            }else{
                song.play();
            }
        }
    }
    
}


