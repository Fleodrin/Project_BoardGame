import {cardElement} from './data.js';

window.addEventListener('load', () => {
  console.log('Hi!');
  for (let card of cardElement) {
      card.style.position = 'unset';
      card.style.animationDuration = '0s';
  }
})