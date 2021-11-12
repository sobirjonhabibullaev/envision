var video = document.getElementById("video");
var source = document.createElement("source");

source.setAttribute(
  "src",
  "http://techslides.com/demos/sample-videos/small.mp4"
);
source.setAttribute("type", "video/mp4");

video.appendChild(source);
video.play();
console.log({
  src: source.getAttribute("src"),
  type: source.getAttribute("type"),
});

setTimeout(function () {
  video.pause();

  source.setAttribute(
    "src",
    "http://techslides.com/demos/sample-videos/small.webm"
  );
  source.setAttribute("type", "video/webm");

  video.load();
  video.play();
  console.log({
    src: source.getAttribute("src"),
    type: source.getAttribute("type"),
  });
}, 3000);
