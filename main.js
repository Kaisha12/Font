function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    
  }

  function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}


function gotPoses(results) 
{
  if(results.lenght > 0)
  {
    console.log(results);

    leftWristX = results[0].pose.leftWrist.leftWristX;
    rightWrist = results[0].pose.rightWrist.x;
    diffrence = floor(leftWristX - rightWristX);
  }
}

function draw() {
  background('#f4788c');

  textSize(diffrence);
  Fill('#4A0E50')
  lext('Kaisha', 50,400);
}
