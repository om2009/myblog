song = "";

left_wrist_x = 0;

left_wrist_y = 0;

right_wrist_x = 0;

right_wrist_y = 0;

score_left_wrist = 0;

score_right_wrist = 0;

function preload()
{
    song = loadSound("music.mp3");
}
function setup()
{
    canvas = createCanvas(600, 450);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("model is ready");
}


function gotPoses(results)
{
    if(results.length > 0)
    {
    console.log(results);
    score_right_wrist = results[0].pose.keypoints[10].score;
    score_left_wrist = results[0].pose.keypoints[9].score;

    console.log("left wrist score : "+score_left_wrist+"right wrist score : "+score_right_wrist)

    left_wrist_x = results[0].pose.leftWrist.x;
    left_wrist_y = results[0].pose.leftWrist.y;
    right_wrist_x = results[0].pose.rightWrist.x;
    right_wrist_y = results[0].pose.rightWrist.y;
    console.log("right wrist x :" +right_wrist_x+"right wrist y :" +right_wrist_y+"left wrist x :" +left_wrist_x+"left wrist y :" +left_wrist_y);

    }
}


function draw()
{
    image(video,0, 0, 600, 450);
    fill('#FF0000');
    stroke('#FF0000');
    if(score_left_wrist >0.2)
    {

    circle(left_wrist_x, left_wrist_y, 20);
    leftY = Number(left_wrist_y);
    remove_decimal= floor(leftY);
    volume = remove_decimal /500;
    document.getElementById("volume").innerHTML = "volume :" +volume;
    song.setVolume(volume);
    }
    if(score_right_wrist>0.2)
    {
       // fill('#FF0000');
    //stroke('#FF0000');
    circle(right_wrist_x, right_wrist_y, 20);
    if(right_wrist_y >0 && right_wrist_y<=100)
    {
        document.getElementById("speed").innerHTML = "Speed : 0.5 x";
        song.rate(0.5);
    }
    if(right_wrist_y >100 && right_wrist_y<=200)
    {
        document.getElementById("speed").innerHTML = "Speed : 1.0 x";
        song.rate(1.0);
    }
    if(right_wrist_y >200 && right_wrist_y<=300)
    {
        document.getElementById("speed").innerHTML = "Speed : 1.5 x";
        song.rate(1.5);
    }
    if(right_wrist_y >300 && right_wrist_y<=400)
    {
        document.getElementById("speed").innerHTML = "Speed : 2.0 x";
        song.rate(2.0);
    }
    if(right_wrist_y >400 )
    {
        document.getElementById("speed").innerHTML = "Speed : 2.5 x";
        song.rate(2.5);
    }
    }
}

function play_btn()
{
    song.play();
    song.setVolume(1);
    song.rate(1);

}
