/* -------------------------------- carousel -------------------------------- */
let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 1;
function loadShow() {
  let stt = 1;
  items[active].style.transform = `none`;
  items[active].style.zIndex = 3;
  items[active].style.filter = 'none';
  items[active].style.opacity = 1;
  for (var i = active + 1; i < items.length; i++) {
    stt++;
    items[i].style.transform = `translateX(${120 * stt}px) scale(${
      1 - 0.2 * stt
    }) perspective(16px) rotateY(-1deg)`;
    items[i].style.zIndex = stt;
    items[i].style.filter = 'blur(5px)';
    items[i].style.opacity = stt > 2 ? 0 : 1;
  }
  stt = 1;
  for (var i = active - 1; i >= 0; i--) {
    stt++;
    items[i].style.transform = `translateX(${-120 * stt}px) scale(${
      1 - 0.2 * stt
    }) perspective(16px) rotateY(1deg)`;
    items[i].style.zIndex = stt;
    items[i].style.filter = 'blur(5px)';
    items[i].style.opacity = stt > 2 ? 0 : 1;
  }
}
loadShow();
next.onclick = function () {
  active = active + 1 < items.length ? active + 1 : active;
  loadShow();
};
prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : active;
  loadShow();
};
/* --------------------------------- navbar --------------------------------- */
const menu = document.getElementById('right_navbar');
const open_nav = document.getElementById('open_menu');
const close_nav = document.getElementById('close_menu');
/* ---------------------------------- queue --------------------------------- */
const open_queue = document.getElementById('queue_btn');
const queue = document.getElementById('queue_side');
const close_queue = document.getElementById('back_btn');
/* --------------------------------- volume --------------------------------- */
const volume_btn_on = document.getElementById('volume_btn_on');
const volume_btn_off = document.getElementById('volume_btn_off');
const volume_slider = document.getElementById('volume_slider');

window.addEventListener('resize', () => {
  let mediaQuery1 = window.matchMedia('(max-width: 910px)');
  let mediaQuery2 = window.matchMedia('(max-width: 670px)');
  if (mediaQuery1.matches) {
    queue.classList.add('toggle_queue');
    open_queue.addEventListener('click', () => {
      queue.classList.remove('toggle_queue');
    });
    close_queue.addEventListener('click', () => {
      queue.classList.add('toggle_queue');
    });
  } else {
    queue.classList.remove('toggle_queue');
  }
  if (mediaQuery2.matches) {
    menu.classList.add('toggle_menu');
    open_nav.addEventListener('click', () => {
      menu.classList.remove('toggle_menu');
    });
    close_nav.addEventListener('click', () => {
      menu.classList.add('toggle_menu');
    });
  } else {
    menu.classList.remove('toggle_menu');
  }
});

window.addEventListener('load', () => {
  let mediaQuery1 = window.matchMedia('(max-width: 910px)');
  let mediaQuery2 = window.matchMedia('(max-width: 670px)');

  if (mediaQuery1.matches) {
    queue.classList.add('toggle_queue');
    open_queue.addEventListener('click', () => {
      queue.classList.remove('toggle_queue');
    });
    close_queue.addEventListener('click', () => {
      queue.classList.add('toggle_queue');
    });
  } else {
    queue.classList.remove('toggle_queue');
  }
  if (mediaQuery2.matches) {
    menu.classList.add('toggle_menu');
    open_nav.addEventListener('click', () => {
      menu.classList.remove('toggle_menu');
    });
    close_nav.addEventListener('click', () => {
      menu.classList.add('toggle_menu');
    });
  } else {
    menu.classList.remove('toggle_menu');
  }
});

/* --------------------------------- slider --------------------------------- */
// First let's set the colors of our sliders
const settings = {
  fill: '#1abc9c',
  background: '#d7dcdf',
};
function applyFill(slider) {
  // Let's turn our value into a percentage to figure out how far it is in between the min and max of our input
  const percentage =
    (100 * (slider.value - slider.min)) / (slider.max - slider.min);
  // now we'll create a linear gradient that separates at the above point
  // Our background color will change here
  const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${
    settings.background
  } ${percentage + 0.1}%)`;
  slider.style.background = bg;
}
// First find all our sliders
const sliders = document.querySelectorAll('.range-slider');
sliders.forEach((slider) => {
  slider.addEventListener('input', (e) => {
    applyFill(e.target);
  });
  applyFill(slider);
});

/* ------------------------------ audio player ------------------------------ */
const play_song = document.querySelectorAll('.play_song');
const pause_song = document.querySelectorAll('.pause_song');
const player = document.getElementById('player');
const music_side = document.getElementById('music_side');
const queue_side = document.getElementById('queue_side');
const navbar = document.querySelector('nav');
let currentAudio = null;
play_song.forEach((song) => {
  song.addEventListener('click', () => {
    player.classList.remove('toggle_player');
    music_side.style.height =
      window.innerHeight - navbar.clientHeight - player.clientHeight + 'px';
    queue_side.style.height =
      window.innerHeight - navbar.clientHeight - player.clientHeight + 'px';
    let audioSrc = song.getAttribute('data-src');
    let audioPlayer = document.getElementById('audioPlayer');
    if (currentAudio && currentAudio.getAttribute('data-src') === audioSrc) {
      if (audioPlayer.paused) {
        audioPlayer.play();
      }
    } else {
      // Stop the currently playing song (if any)
      if (currentAudio) {
        currentAudio.pause();
      }
      // Start playing the new song
      let songPath = 'song/' + audioSrc;
      audioPlayer.src = songPath;
      audioPlayer.play();
      currentAudio = audioPlayer; // Assign currentAudio here
    }
  });
});
document.getElementById('pause').addEventListener('click', function () {
  // Toggle pause and play when the pause button is clicked
  if (audioPlayer.paused) {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
  }
});
let trackSlider = document.getElementById('trackSlider');
let currentTimeDisplay = document.getElementById('currentTime');
let durationDisplay = document.getElementById('duration');
function formatTime(time) {
  var minutes = Math.floor(time / 60);
  var seconds = Math.floor(time % 60);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}
// Update the time displays and slider as the audio progresses
audioPlayer.addEventListener('timeupdate', function () {
  var currentTime = formatTime(audioPlayer.currentTime);
  var duration = formatTime(audioPlayer.duration);

  currentTimeDisplay.textContent = currentTime;
  durationDisplay.textContent = duration;

  // Update the slider position
  var progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  trackSlider.value = progress;
});
trackSlider.addEventListener('input', function () {
  var progress = trackSlider.value / 100;
  var newPosition = progress * audioPlayer.duration;
  audioPlayer.currentTime = newPosition;
});
let volumeSlider = document.getElementById('volumeSlider');
volumeSlider.addEventListener('input', function () {
  var volume = volumeSlider.value / 100;
  audioPlayer.volume = volume;
});

/* -------------------------------- dropdown -------------------------------- */
const btn1 = document.getElementById('btn_1');
const btn2 = document.getElementById('btn_2');
const btn3 = document.getElementById('btn_3');
const btn4 = document.getElementById('btn_4');
const btn5 = document.getElementById('queue_side__dropdown');
const dropdown1 = document.getElementById('dropdown-1');
const dropdown2 = document.getElementById('dropdown-2');
const dropdown3 = document.getElementById('dropdown-3');
const dropdown4 = document.getElementById('dropdown-4');
const dropdown5 = document.getElementById('dropdown-5');

btn1.addEventListener('click', () => {
  dropdown1.classList.toggle('toggle_menu');
});
btn2.addEventListener('click', () => {
  dropdown2.classList.toggle('toggle_menu');
});
btn3.addEventListener('click', () => {
  dropdown3.classList.toggle('toggle_menu');
});
btn4.addEventListener('click', () => {
  dropdown4.classList.toggle('toggle_menu');
});
btn5.addEventListener('click', () => {
  dropdown5.classList.toggle('toggle_menu');
});
