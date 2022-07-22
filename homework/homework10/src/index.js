const playBtn = document.getElementById("play");
const video = document.getElementById("video");
const muteBtn = document.getElementById("mute");
const volumnRange = document.getElementById("volume");

const handleVideoPlay = () => {
  playBtn.removeEventListener("click", handleVideoPlay);
  playBtn.addEventListener("click", handleVideoPause);
  playBtn.value = "Pause";
  video.play();
};

const handleVideoPause = () => {
  playBtn.removeEventListener("click", handleVideoPause);
  playBtn.addEventListener("click", handleVideoPlay);
  playBtn.value = "Play";
  video.pause();
};

const handleMute = () => {
  muteBtn.removeEventListener("click", handleMute);
  muteBtn.addEventListener("click", handleUnmute);
  muteBtn.value = "Unmute";
  video.muted = true;
  volumnRange.value = 0;
};

const handleUnmute = () => {
  muteBtn.removeEventListener("click", handleUnmute);
  muteBtn.addEventListener("click", handleMute);
  muteBtn.value = "Mute";
  video.muted = false;
  video.volume = 0.5;
  volumnRange.value = 0.5;
};

const handleVolumeChange = (event) => {
  const {
    target: { value }
  } = event;

  if (String(value) === String(0)) {
    muteBtn.removeEventListener("click", handleMute);
    muteBtn.addEventListener("click", handleUnmute);
    muteBtn.value = "Unmute";
    video.muted = true;
  } else {
    muteBtn.removeEventListener("click", handleUnmute);
    muteBtn.addEventListener("click", handleMute);
    muteBtn.value = "Mute";
    video.muted = false;
  }
  video.volume = value;
};

playBtn.addEventListener("click", handleVideoPlay);
muteBtn.addEventListener("click", handleMute);
volumnRange.addEventListener("input", handleVolumeChange);
