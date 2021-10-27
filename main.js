nose_x = 0;
nose_y = 0;


function preload(){
    mustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}


function setup(){
    canvas = createCanvas(400, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide()
    poseNet = ml5.poseNet(video, modeLoded);
    poseNet.on('pose', gotPose);
}

function modeLoded()
{
    console.log("model is ready");
}

function gotPose(result){
    if(result.length >0)
    {
        console.log(result);
        nose_x = result[0].pose.nose.x+15;
        nose_y = result[0].pose.nose.y+25;
        console.log("nose X = " + nose_x);
        console.log("nose y = " + nose_y);
    }
}

function draw()
{
    image(video, 0, 0, 400, 350);
    //fill(255, 0 , 0);
    //stroke(255, 0, 0);
    //circle(noseX, noseY, 20);
    image(mustache, nose_x, nose_y, 70, 30);

}

function take_snapshot(){
    save('myFilterImage.png');
}