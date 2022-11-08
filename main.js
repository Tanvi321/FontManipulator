difference=0;
rightWristX=0;
leftWristX=0;

function preload()
{}

function setup()
{
    video=createCapture(VIDEO);
    video.size(550, 500);
    canvas=createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background("#F5E2E4");
    textSize(difference);
    fill('#a1cdce');
    stroke('#a1cdce');
 text('Tanvi', 200, 300);

}

function modelLoaded()
{
    console.log('PoseNet is initialized........:)');
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        difference=floor(leftWristX-rightWristX);
        console.log("leftWristX="+leftWristX+"rightWristY="+rightWristY);
    }
}

