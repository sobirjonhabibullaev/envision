window.onload = function () {
  let vid = document.getElementById('vid');
  vid.duration = 1;
} 
 
 setTimeout(() => {
   
  // Classifier Variable
   let classifier;
   // Model URL
   let imageModelURL =
     "https://teachablemachine.withgoogle.com/models/lIvux57Wc/";

   // Video
   let video;
   let flippedVideo;
   // To store the classificationpip install streamlit
   let label = "";
   let img;
   // Load the model first
   function preload() {
     classifier = ml5.imageClassifier(imageModelURL + "model.json");
     img = loadImage("data/logo.png");
   }

   function setup() {
     createCanvas(400, 660);
     // Create the video
     //video = createCapture(VIDEO);

     var constraints = {
       audio: false,
       video: {
         facingMode: "environment",
       },
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

     // Draw the label
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
     if (results[0].confidence > 0.9) {
       label = results[0].label;

       console.log(label);
       add_url(label)
     } else {
       label = "...";
     }
     flippedVideo.remove();
     // Classifiy again!
     classifyVideo();
   }
 }, vid.duration);
 


 
 function add_url(n) {
   if (n == "Astronomy") {
     vid.setAttribute("src", "Astrology.ogg");
   } else if (n == "Biology") {
     vid.setAttribute("src", "Astrology.ogg");
   } else if (n == "Chemistry") {
     vid.setAttribute("src", "Astrology.ogg");
   } else if (n == "Medicine") {
     vid.setAttribute("src", "Astrology.ogg");
   } else if (n == "Physics") {
     vid.setAttribute("src", "Astrology.ogg");
   }else{
     vid.setAttribute("src", "#");
   }
 }