import {NUMBERS, NUMBERS_IN_LETTERS, cardContainer, cardElements, initialArray} from './data.js';

let count = 0;
const searchForCompleteCards = (searchCards, clickedCards) => {
    if (count === 2 && searchCards.length === 2) {
        for (let completeCard of searchCards) {
            completeCard.classList.remove(`main__content--${completeCard.dataset.card}`);
            removeClicked(completeCard);
            completeCard.classList.add(`main__content--finished`);
        }

        return count = 0;
    }

    if (count !== 1) {
        for (let incompleteCard of clickedCards) {
            removeTextContent(incompleteCard);
            removeClicked(incompleteCard);
            incompleteCard.classList.remove(`main__content--${incompleteCard.dataset.card}`);
        }

        return count = 0;
    }
}

function removeClicked(card) {
    const removeElement = () => {
        card.classList.remove('clicked');
        return 0;
    };

    setTimeout(removeElement, 700);
}

function removeTextContent(card) {
    const removeElement = () => {
        card.textContent = '';
        return 0;
    };

    setTimeout(removeElement, 700);
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
}

export function startGame() {
    shuffle(initialArray);

    for (let i = 0; i < cardElements.length; i++) {
        const card = cardElements[i];
        card.setAttribute('data-card', NUMBERS_IN_LETTERS[initialArray[i]]);

        card.addEventListener('click', () => {
            if (!card.classList.contains('clicked')) count += 1;

            card.classList.add('clicked');
            card.classList.add(`main__content--${card.dataset.card}`);

            const clickedCards = cardContainer.querySelectorAll('.clicked');
            const searchCards = cardContainer.querySelectorAll(`.main__content--${card.dataset.card}`);
            card.textContent = NUMBERS[card.dataset.card];

            searchForCompleteCards(searchCards, clickedCards);
        });
    }
}

startGame();