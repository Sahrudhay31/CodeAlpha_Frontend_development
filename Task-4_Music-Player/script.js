const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const progressBar = document.getElementById('progress-bar');
const progressContainer = document.getElementById('progress-container');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const volumeSlider = document.getElementById('volume');

// Sample songs using copyright-free links
const songs = [
    {
        title: 'Acoustic Breeze',
        artist: 'Benjamin Tissot',
        src: 'https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3'
    },
    {
        title: 'Sunny',
        artist: 'Benjamin Tissot',
        src: 'https://www.bensound.com/bensound-music/bensound-sunny.mp3'
    }
];

let songIndex = 0;
let isPlaying = false;

function loadSong(song) {
    title.textContent = song.title;
    artist.textContent = song.artist;
    audio.src = song.src;
}

function playSong() {
    isPlaying = true;
    playBtn.innerHTML = '&#10074;&#10074;';
    audio.play();
}

function pauseSong() {
    isPlaying = false;
    playBtn.innerHTML = '&#9658;';
    audio.pause();
}

playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

prevBtn.addEventListener('click', () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
});

nextBtn.addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
});

audio.addEventListener('timeupdate', (e) => {
    const { duration, currentTime } = e.srcElement;
    if (duration) {
        const progressPercent = (currentTime / duration) * 100;
        progressBar.style.width = `${progressPercent}%`;

        const formatTime = (time) => {
            const minutes = Math.floor(time / 60);
            const seconds = Math.floor(time % 60);
            return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        };

        currentTimeEl.textContent = formatTime(currentTime);
        durationEl.textContent = formatTime(duration);
    }
});

progressContainer.addEventListener('click', (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
});

volumeSlider.addEventListener('input', (e) => {
    audio.volume = e.target.value;
});

audio.addEventListener('ended', () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
});

// Load first song
loadSong(songs[songIndex]);