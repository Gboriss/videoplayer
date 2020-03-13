
const video = document.querySelector('.player-video')
const progress = document.querySelector('.progress')
const progressFilled = document.querySelector('.filled-progress')
const toggle = document.querySelector('.toggle-play')
const skippers = document.querySelectorAll('.player-btn')

const time = document.querySelector('.time')
const load = document.querySelector('.load') 
const ranges = document.querySelectorAll('.player-slider')


function togglePlay() {
  const playState = video.paused ? 'play' : 'pause'
  video[playState]()
}

function updateButton() {
    const togglePlayBtn = document.querySelector('.toggle-play')
    this.paused 
        ?
        togglePlayBtn.innerHTML = `<svg class="" width="16" height="16" viewBox="0 0 16 16"><title>play</title><path d="M3 2l10 6-10 6z"></path></svg>`  
        :
        togglePlayBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16"><title>pause</title><path d="M2 2h5v12H2zm7 0h5v12H9z"></path></svg>`
}


function rangeUpdate() {
  video[this.name] = this.value
}

function videoTime() {
    let duration = video.duration.toFixed(1)

    let f = duration - video.currentTime
    let minutes = Math.floor( (f / 60) % 60 )
    let seconds = Math.floor(f % 60 )
    let test = (minutes > 0 ? minutes : '0')  + ' : ' + (seconds > 0 ? seconds : '0')
    load.innerText = test
}

function loadTime() {
    let duration = video.duration.toFixed(1)
    let minutes = Math.floor( (duration / 60) % 60 )
    let seconds = Math.floor(duration % 60 )
    let totalTime = minutes + ' : ' + seconds

    time.innerText = totalTime
}

function progressUpdate() {
    progressFilled.style.flexBasis = (video.currentTime / video.duration * 100) + '%'
    // progressFilled.style.flexBasis = `${percent}%`
}

function scrub(e) {
    video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip)
  
  }

// Event listeners
document.addEventListener('keydown', function(e) {
  e.keyCode === 32 && togglePlay()
})


video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate', progressUpdate)
video.addEventListener('timeupdate', videoTime)
video.addEventListener('loadedmetadata', loadTime)
// secondsUpdated
// loadedmetadata

toggle.addEventListener('click', togglePlay)
skippers.forEach(button => button.addEventListener('click', skip))
ranges.forEach(range => range.addEventListener('change', rangeUpdate))
ranges.forEach(range => range.addEventListener('mousemove', rangeUpdate))

let mousedown = false;
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e) => mousedown && scrub(e))
progress.addEventListener('mousedown', () => mousedown = true)
progress.addEventListener('mouseup', () => mousedown = false)

