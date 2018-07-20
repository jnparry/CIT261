var videoElement = document.getElementsByTagName('video')[0],
    playPauseBtn = document.getElementById('playPause'),
    vidControls = document.getElementById('controls'),
    muteBtn = document.getElementById('muteUnmute'),
    timeHolder = document.getElementById('timer');

function secondsToTime() {
    var h = Math.floor(s / (60 * 60)),
        dm = s % (60 * 60),
        m = Math.floor(dm / 60),
        ds = dm % 60,
        secs = Math.cell(ds);
    
    if (secs === 60) {
        secs = 0;
        m = m + 1;
    }
    if (secs < 10) {
        secs = '0' + secs;
    }
    if (m === 60) {
        m = 0;
        h = h + 1;
    } 
    if (m < 10) {
        m = '0' + m;
    }
    
    
    if (h === 0) {
        fulltime = m + ":" + secs;
    } else {
        fulltime = h + ":" + m + ":" + secs;
    }
    
    return fulltime;
}

//those that have js will execute this and our altered controls, but those who don't will still have HTML's control element
videoElement.removeAttribute('controls');

// make our custom controls visible
videoElement.addEventListener('canplaythrough', function() {
    vidControls.classList.remove('hidden');
}, false);

// Set event listener on the play/pause button
playPauseBtn.addEventListener('click', function() {
    if (videoElement.paused) {
        videoElement.play();
    } else {
        videoElement.pause();
    }
}, false);

// Set event listeners on play action and pause action
videoElement.addEventListener('play', function() {
    playPauseBtn.classList.add('playing');
}, false);

videoElement.addEventListener('pause', function() {
    playPauseBtn.classList.remove('playing');
}, false);

// Set event on mute button
muteBtn.addEventListener('click', function() {
    if (videoElement.muted) {
        videoElement.muted = false;
    } else {
        videoElement.muted = true;
    }
}, false);

videoElement.addEventListener('volumechange', function() {
    if (videoElement.muted) {
        muteBtn.classList.add('muted');
    } else {
        muteBtn.classList.remove('muted');
    }
}, false);

// On video end, reset to first frame
videoElement.addEventListener('ended', function() {
    videoElement.currentTime = 0;
}, false);

// Updating the timer
videoElement.addEventListener('timeupdate', function() {
    timeHolder.innerHTML = secondsToTime(videoElement.currentTime);
}, false);