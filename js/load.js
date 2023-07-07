import {cardElements} from './data.js';

window.addEventListener('load', () => {
    for (let card of cardElements) {
        card.style.position = 'relative';
        card.style.animationDuration = '0s';
    }
})