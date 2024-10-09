noseX=0;
noseY=0;
wristRight=0;
wristLeft=0;
diffrence=0;
function setup(){
    video = createCapture(VIDEO);
    video.size(600, 550);
    canvas=createCanvas(1000, 600);
    canvas.position(690,100);
    poseNet=ml5.poseNet(video, ModelLoaded);
    poseNet.on("pose", gotPoses);
}
function draw(){
    background('#000000');
    textSize(diffrence);
    fill('#00FF00');
    text("Dhruv",noseX, noseY);

}

function ModelLoaded(){
    console.log("Model is loaded");
}

function gotPoses(results){
    if (results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        wristRight=results[0].pose.rightWrist.x;
        wristLeft=results[0].pose.leftWrist.x;
        diffrence=wristLeft-wristRight;
    }
}