
const video = document.querySelector('.player-video')
const progress = document.querySelector('.progress')
const progressFilled = document.querySelector('.filled-progress')
const toggle = document.querySelector('.toggle-play')
const skippers = document.querySelectorAll('[data-skip]')
<<<<<<< HEAD
const time = document.querySelector('.time')
const load = document.querySelector('.load')
const ranges = document.querySelectorAll('.player-slider')

let aspect = 16 / 9
function setSize(W, H) {
	if (!video) return

	document.video.style.width = W + 'px'
    document.video.style.height = H + 'px'
    console.log(document.video.style.width)

	if (W / H < aspect) {
		video.height = H
		video.width = H * aspect
	
		video.style.top = 0
		video.style.left = (W - video.width) / 2 + 'px'
	} else {
		video.width = W
		video.height = W * aspect
	
		video.style.left = 0
		video.style.top = (H - video.height) / 2 + 'px'
	}

}

// setSize(window.innerWidth, window.innerHeight)
=======

const ranges = document.querySelectorAll('.player-slider')
>>>>>>> 23da28a9a0976830ac02405859304854b70de6f7

function togglePlay() {
    const playState = video.paused ? 'play' : 'pause'
    video[playState]()
    
    setSize(window.innerWidth, window.innerHeight)
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

<<<<<<< HEAD
function rangeUpdate() {
    video[this.name] = this.value
    // console.log(this.value)

}

function videoTime() {
    let duration = video.duration.toFixed(1)
    let m = duration % 60
    let countdown = Math.floor(duration - video.currentTime) + ' : ' +  (m < 10 ? '00' : '')
    let f = Math.floor(duration - video.currentTime)
    let test = (f > 1 ? f : '00')  + ' : ' + (f < 10 ? '0' + f : f) 

    load.innerText = test
}

function loadTime() {
    let duration = video.duration.toFixed(1);
    let m = duration % 60
    let totalTime = Math.floor(duration / 60) + ' : ' + (m < 10 ? '00' : duration)
    time.innerText = totalTime
}



function progressUpdate() {
    progressFilled.style.flexBasis = (video.currentTime / video.duration * 100) + '%'
    // progressFilled.style.flexBasis = `${percent}%`
}

function scrub(e) { 
    video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration
=======
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
>>>>>>> 23da28a9a0976830ac02405859304854b70de6f7
}


video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
<<<<<<< HEAD
video.addEventListener('timeupdate', progressUpdate)
video.addEventListener('timeupdate', videoTime)
video.addEventListener('loadedmetadata', loadTime)
// secondsUpdated
// loadedmetadata
=======
// video.addEventListener('timeupdate', progressUpdate)
>>>>>>> 23da28a9a0976830ac02405859304854b70de6f7

toggle.addEventListener('click', togglePlay)
skippers.forEach(button => button.addEventListener('click', skip))
ranges.forEach(range => range.addEventListener('change', rangeUpdate))
ranges.forEach(range => range.addEventListener('mousemove', rangeUpdate))
<<<<<<< HEAD

let mousedown = false
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e) => mousedown && scrub(e))
progress.addEventListener('mousedown', () => mousedown = true)
progress.addEventListener('mouseup', () => mousedown = false)
=======
>>>>>>> 23da28a9a0976830ac02405859304854b70de6f7
