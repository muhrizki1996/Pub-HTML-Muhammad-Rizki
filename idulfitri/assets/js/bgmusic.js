var audio = document.getElementById('bgmusic');
audio.addEventListener('ended', function() {
  loop();
}, false);

function loop() {
  audio.currentTime = 0; //rewind audio track to the beginning
  audio.play(); // play it
}

//also manually trigger play when it is able to play ie. when files is loaded sufficiently for playing
audio.addEventListener('canplay', function() {
  audio.play(); // play it
}, false);