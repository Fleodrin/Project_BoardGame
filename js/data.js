const NUMBERS = {
    first: '1',
    second: '2',
    third: '3',
    fourth: '4',
    fifth: '5',
    sixth: '6',
    seventh: '7',
    eighth: '8',
    ninth: '9',
}
const cardContainer = document.querySelector('.main__content-wrapper');
export const cardElement = cardContainer.querySelectorAll('.main__content');

let count = 0;

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

for (let card of cardElement) {
    card.addEventListener('click', () => {
            if (!card.classList.contains('clicked')) count += 1;

            card.classList.add('clicked');
            card.classList.add(`main__content--${card.dataset.card}`);
            
            const clickedCards = cardContainer.querySelectorAll('.clicked');
            const searchCards = cardContainer.querySelectorAll(`.main__content--${card.dataset.card}`);
            card.textContent = NUMBERS[card.dataset.card];

            searchForCompleteCards(searchCards, clickedCards);
        }
    );
}
