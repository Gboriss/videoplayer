
const video = document.querySelector('.player-video')
const progress = document.querySelector('.progress')
const progressFilled = document.querySelector('.filled-progress')
const toggle = document.querySelector('.toggle-play')
const skippers = document.querySelectorAll('[data-skip]')

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

function skip() {
  video.currentTime += parseFloat(this.dataset.skip)

}

function rangeUpdate() {
    video[this.name] = this.value
    console.log(this.value)
    console.log(this.name)
}


video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
// video.addEventListener('timeupdate', progressUpdate)

toggle.addEventListener('click', togglePlay)
skippers.forEach(button => button.addEventListener('click', skip))
ranges.forEach(range => range.addEventListener('change', rangeUpdate))
ranges.forEach(range => range.addEventListener('mousemove', rangeUpdate))
