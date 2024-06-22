const audio = document.getElementById('audio');
const playButton = document.getElementById('playButton');

playButton.addEventListener('click', function() {
  if (audio.paused) {
    audio.play();
    playButton.innerHTML = '<i class="fa-solid fa-pause"></i>'; // меняем HTML на "Pause"
  } else {
    audio.pause();
    audio.currentTime = 0; // сбрасываем время воспроизведения на начало
    playButton.innerHTML = '<i class="fa-solid fa-play"></i>'; // меняем HTML на "Play Audio"
  }
});

audio.addEventListener('ended', function() {
  playButton.innerHTML = '<i class="fa-solid fa-play"></i>'; // обновляем HTML кнопки при окончании воспроизведения
});