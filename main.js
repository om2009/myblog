function preload(){

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
        console.log("nose X = " + result[0].pose.nose.x);
        console.log("nose y = " + result[0].pose.nose.y);
    }
}

function draw()
{
    image(video, 0, 0, 400, 350);

}

function take_snapshot(){
    save('myFilterImage.png');
}