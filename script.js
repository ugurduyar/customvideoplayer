const video = document.getElementById("video");
const play = document.getElementById("play");
const timestamp = document.getElementById("timestamp");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");

// Play & pause video
function toggleVideoStatus() {
  return true;
}

// Update play pause icon

function updatePlayIcon() {
  return true;
}

// Event listeners
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);

stop.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);
