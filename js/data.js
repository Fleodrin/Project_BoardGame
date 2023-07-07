export const NUMBERS = {
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
export const NUMBERS_IN_LETTERS = {
    1: 'first',
    2: 'second',
    3: 'third',
    4: 'fourth',
    5: 'fifth',
    6: 'sixth',
    7: 'seventh',
    8: 'eighth',
    9: 'ninth'
}
export const cardContainer = document.querySelector('.main__content-wrapper');
export const cardElements = cardContainer.querySelectorAll('.main__content');
export let initialArray = Array.from({length: 9}, (_, index) => index + 1);
initialArray.push(...initialArray)