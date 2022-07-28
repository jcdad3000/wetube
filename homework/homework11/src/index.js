const video = document.querySelector("video");
const videoController = document.getElementById("videoController");
const psBtn = videoController.querySelector("#playPauseBtn");
const volumeBtn = videoController.querySelector("#volume");
const volumeRange = videoController.querySelector("#volumeRange");
const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");
const timeline = document.getElementById("timeline");
const fullScreenBtn = document.getElementById("fullScreen");
const videoContainer = document.getElementById("videoContainer");

let volumeValue = 0.5;
video.volume = volumeValue;

console.log(timeline);

const handlePlayAndStop = () => {
  if (video.paused) {
    video.play();
    psBtn.className = "fas fa-pause";
  } else {
    video.pause();
    psBtn.className = "fas fa-play";
  }
};

const handleSound = () => {
  if (video.muted) {
    video.muted = false;
    volumeRange.value = volumeValue;
    volumeBtn.className = "fas fa-volume-up";
  } else {
    video.muted = true;
    volumeRange.value = 0;
    volumeBtn.className = "fas fa-volume-mute";
  }
};

const handleVolume = (event) => {
  const {
    target: { value },
  } = event;
  if (video.muted) {
    video.muted = false;
    volumeBtn.className = "fas fa-volume-mute";
  }
  if (value === "0") {
    volumeBtn.className = "fas fa-volume-off";
  } else {
    volumeBtn.className = "fas fa-volume-up";
  }
  video.volume = volumeValue = value;
};

const formatTime = (seconds) => {
  const date = new Date(seconds * 1000).toISOString().substring(14, 19);
  return date;
};

const handleMetadata = () => {
  console.log(":hwllo");
  totalTime.innerText = formatTime(Math.floor(video.duration));
  timeline.max = Math.floor(video.duration);
};

const handleTimeUpdate = () => {
  timeline.value = Math.floor(video.currentTime);
  currentTime.innerText = formatTime(timeline.value);
};

const handleTimelineInput = (event) => {
  const {
    target: { value },
  } = event;

  video.currentTime = value;
};

const handleFullScreen = () => {
  const fullScreen = document.fullscreenElement;

  if (fullScreen) {
    document.exitFullscreen();
    fullScreenBtn.innerText = "Full Screen";
  } else {
    videoContainer.requestFullscreen();
    fullScreenBtn.innerText = "Exit Full Screen";
  }
};

const handleKeyboard = (event) => {
  const fullScreen = document.fullscreenElement;
  if (event.keyCode === 32) {
    if (video.paused) {
      video.play();
      psBtn.className = "fas fa-pause";
    } else {
      video.pause();
      psBtn.className = "fas fa-play";
    }
  } // space-bar

  if (event.keyCode === 27) {
    if (fullScreen) {
      document.exitFullscreen();
      fullScreenBtn.innerText = "Full Screen";
    }
  } //Exit button

  if (event.keyCode === 70) {
    if (!fullScreen) {
      videoContainer.requestFullscreen();
      fullScreenBtn.innerText = "Exit Full Screen";
    }
  } // Key "F"
};

video.addEventListener("loadedmetadata", handleMetadata);
psBtn.addEventListener("click", handlePlayAndStop);
volumeBtn.addEventListener("click", handleSound);
volumeRange.addEventListener("input", handleVolume);
timeline.addEventListener("input", handleTimelineInput);
video.addEventListener("timeupdate", handleTimeUpdate);
fullScreenBtn.addEventListener("click", handleFullScreen);
document.addEventListener("keydown", handleKeyboard);
