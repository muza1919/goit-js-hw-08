import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'video-current-time';


player.on('timeupdate', throttle(findCurrentTime, 1000))

function findCurrentTime(event){
    localStorage.setItem(LOCALSTORAGE_KEY, event.seconds);
}
 
player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY))
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
