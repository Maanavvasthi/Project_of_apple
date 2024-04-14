noseX=0;
noseY=0;
rightWristX=0;
leftWristX=0;
difference=0;
function setup(){
    canvas=createCanvas(550,550);
    canvas.position(560,160);
    video=createCapture(VIDEO);
    video.size(550,500);
    poseNet=ml5.poseNet(video,modelLoaded());
    poseNet.on("pose",gotPoses);
}
function modelLoaded(){
    console.log("Pose net is loaded");
}
function gotPoses(){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+noseX+"noseY="+noseY);
        
    }
}