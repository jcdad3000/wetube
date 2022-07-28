const recordBtn = document.getElementById("recordBtn");
const audio = document.getElementById("audioPlayer");

let recorder;
let stream;
let audioFile;

const handleDownload = () => {
  recordBtn.removeEventListener("click", handleDownload);
  recordBtn.innerText = "Transcording....";
  recordBtn.disabled = true;

  console.log(audioFile);
  const mp3Url = audioFile;
  const a = document.createElement("a");

  a.href = mp3Url;
  a.download = "output.mp3";
  document.body.appendChild(a);
  a.click();
};

const handleStart = () => {
  recordBtn.innerText = "Now Recording....";
  recordBtn.disabled = true;
  recordBtn.removeEventListener("click", handleStart);

  recorder = new MediaRecorder(stream, { MimeType: "audio/mp3" });
  recorder.ondataavailable = (event) => {
    audioFile = URL.createObjectURL(event.data);
    audio.srcObject = null;
    audio.src = audioFile;
    audio.play();
    recordBtn.innerText = "Download Recording";
    recordBtn.disabled = false;
    recordBtn.addEventListener("click", handleDownload);
  };

  recorder.start();
  setTimeout(() => {
    recorder.stop();
  }, 5000);
};

const init = async () => {
  stream = await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: false
  });
};
init();
recordBtn.addEventListener("click", handleStart);
