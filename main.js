NoseX = 0;
NoseY = 0;
rightwrist = 0;
leftwrist = 0;
difference = 0;

function setup(){
video = createCapture(VIDEO);
video.size(560,500);

canvas = createCanvas(450,450)
canvas.position(560,100)

poseNet = ml5.poseNet(video,modelloaded)
poseNet.on('pose',gotPoses);

}

function modelloaded(){
    console.log('PoseNet is Initialized!')
}

function gotPoses(results){
if(results.length > 0)
    {
    console.log(results)
    rightwrist = results[0].pose.rightWrist.x;
    leftwrist = results[0].pose.leftWrist.x;
    NoseX = results[0].pose.nose.x;
    NoseY = results[0].pose.nose.y;
    difference = floor(leftwrist - rightwrist);

    }
}
function draw(){
background('#969A97');

document.getElementById("square_size").innerHTML = "Width and the Height of the square will be = "+ difference + "px";

fill('#F90093');
stroke('#F90093');
square(NoseX, NoseY, difference);

}
