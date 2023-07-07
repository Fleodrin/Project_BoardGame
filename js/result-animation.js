import {cardElements} from './data.js';

const title = document.querySelector('.main-title');
const wrapper = document.querySelector('.main__content-wrapper');

export function searchFinishedCard() {
    for (let card of cardElements) {
        card.addEventListener('click', () => {
            const finishedCard = document.querySelectorAll('.main__content--finished');
            if (finishedCard.length === 18) {
                title.textContent = 'Congratulations!';
                title.classList.remove('visually-hidden');
                wrapper.classList.add('animation');
                title.addEventListener('click', () => {
                    wrapper.style.animationName = 'rotate-final';
                })
            }
        })
    }
}