// Get the elements

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('progress');
const progressBar = player.querySelector('.progress__filled');

const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Functions

function togglePlay() {
    video.paused ? video.play() : video.pause();
}

function changeButton() {
    const icon = this.paused ? '►' : '❚❚';
    toggle.textContent = icon;
}

// Event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', changeButton);
video.addEventListener('pause', changeButton);

toggle.addEventListener('click', togglePlay);