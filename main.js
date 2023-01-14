function preload(){

}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotResult);
}

function draw(){
image(video, 0, 0, 300, 300);
}

function take_snapshot(){
    save("mustache.png");
}

function modelLoaded()
{
    console.log("Model Loaded!");
}

function gotResult(result){
    if(result.length > 0){
        console.log(result);
        console.log("nose x = " + result[0].pose.nose.x);
        console.log("nose y = " + result[0].pose.nose.y);
    }
    else{
        console.log("error");
    }
}