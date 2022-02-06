const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

if (localStorage.getItem('videoplayer-current-time')) {
  const localTime = localStorage.getItem('videoplayer-current-time');
  player.setCurrentTime(localTime);
}

player.on(
  'timeupdate',
  throttle(data => {
    localStorage.setItem('videoplayer-current-time', data.seconds.toString());
  }, 2000),
);
