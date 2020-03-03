
const video = document.querySelector('.player-video')

function togglePlay() {
    const playState = video.paused ? 'play' : 'pause'
    video[playState]()
}

video.addEventListener('click', togglePlay);