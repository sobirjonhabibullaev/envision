window.onload = function () {
  let vid = document.getElementById('vid');
};
// Classifier Variable
let classifier;
// Model URL
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/lIvux57Wc/';
let link = '';
let label = '';
// Video
let video;
let flippedVideo;
// To store the classificationpip install streamlit
let img;
// let vid;

// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
  img = loadImage('data/logo.png');
  // vid = loadImage('Chemistry.gif');
  // vid.id = 'cccc';
}

function setup() {
  createCanvas(400, 660);
  // Create the video
  // video = createCapture(VIDEO);

  var constraints = {
    audio: false,
    video: {
      facingMode: 'environment',
    }
  };
  video = createCapture(constraints);
  video.size(400, 660);
  video.hide();
  flippedVideo = ml5.flipImage(video);
  // Start classifying
  classifyVideo();
}

function draw() {
  background(0);
  // Draw the video
  image(video, 0, 0);
  // image(vid, 0, 250);
  // Draw the label
  // image(vid, 0, 300, 400, 250);
  fill(255);
  textSize(30);
  textAlign(CENTER);
  text(label, width / 2, height - 60);
  image(img, 10, height - 100, 100, 52);
  
}

// Get a prediction for the current video frame
function classifyVideo() {
  flippedVideo = ml5.flipImage(video);
  classifier.classify(flippedVideo, gotResult);

}

// When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  if (results[0].confidence > 0.95) {
        // output(label);
    console.log(label);
    label = results[0].label;
    
    if (label == "Astronomy") {
      vid.src = "/videos/Astrology.mov";
    } else if (label == "Biology") {
      vid.src = "/videos/Biology.mov";
    } else if (label == "Chemistry") {
      vid.src = "/videos/Chemistry.mov";
    } else if (label == "Medicine") {
      vid.src = "/videos/Medicine.mov";
    } else if (label == "Physics") {
      vid.src = "Astrology.ogg";
    } else {
      vid.src = "#";
    }
    
  } else {
    label = '...';
  }
  flippedVideo.remove();
  // Classifiy again!
  classifyVideo();
  // return add_url(label);
}


 function add_url(l) {
   
 }

// function output(l) {

//     console.log('video set');
//     setInterval(() => {
//       console.log('video ended');
//     }, int(vid.duration * 1000));
//   }
// }
