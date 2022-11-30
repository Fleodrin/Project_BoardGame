import {cardElement} from './data.js';

window.addEventListener('load', () => {
  for (let card of cardElement) {
      card.style.position = 'relative';
      card.style.animationDuration = '0s';
  }
})