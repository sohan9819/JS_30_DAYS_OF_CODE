const video = document.querySelector("video");

// CONTORLS
const progress_track = document.querySelector(".progress__filled");
const progress_bar = document.querySelector(".progress");
const playBtn = document.querySelector('button[title="Toggle Play"');
const volume = document.querySelector('input[name="volume"]');
const playbackRate = document.querySelector('input[name="playbackRate"]');

// FORWARD BACKWARD
const timeBtns = document.querySelectorAll('button[name="timeControl"]');

// console.log(video);
// console.log(volume);
// console.log(playbackRate);
// console.log(playBtn);
// console.log(timeBtn);
// console.log(progress_bar);

function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();
  const icon = video.paused ? "⏵︎" : "⏸︎";
  playBtn.textContent = icon;
}

function scrub(e) {
  console.log(e);
  console.log(e.offsetX);
  console.log(progress_bar.offsetWidth);
  percentage = (e.offsetX / progress_bar.offsetWidth) * 100;
  progress_track.style.flexBasis = `${percentage}%`;
  video.currentTime = (percentage * video.duration) / 100;
}

playBtn.addEventListener("click", (e) => togglePlay());

video.addEventListener("click", (e) => togglePlay());

volume.addEventListener("input", (e) => {
  video.volume = volume.value;
});

playbackRate.addEventListener("input", (e) => {
  video.playbackRate = playbackRate.value;
});

timeBtns.forEach((timeBtn) => {
  timeBtn.addEventListener("click", (e) => {
    video.currentTime = video.currentTime + +e.target.dataset.skip;
  });
});

video.addEventListener("timeupdate", (e) => {
  let percentage = (video.currentTime / video.duration) * 100;
  progress_track.style.flexBasis = `${percentage}%`;
});

progress_bar.addEventListener("click", scrub);

video.addEventListener("dblclick", (e) => {
  video.requestFullscreen();
  //   console.log(document.fullscreenElement);
  //   if (video.fullscreenElement) {
  //     console.log(video.exitFullscreen());
  //   } else {
  //     video.requestFullscreen();
  //   }
});
