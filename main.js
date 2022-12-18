function preload(){}
function setup(){
    video= createCapture(VIDEO)
    canvas= createCanvas(550,450)
    canvas.position(680,125);
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}
function modelLoaded(){
    console.log("poseNet Is Initialized!")
}

function gotPoses(results){
if(results.length>0){
console.log(results)
}
}