const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;
const overlay = document.getElementById('overlay');
const startButton = document.querySelector('a.btn__reset');
const scoreboard = document.getElementById('scoreboard');
const phrases = [
  'A fish out of water',
  'Break a leg',
  'Cat got your tongue',
  'High and dry',
  'The whole shebang'
];

startButton.addEventListener('click', () => {
  overlay.style.display = 'none';
});

function getRandomPhraseAsArray(phrases) {
  const randomArray = phrases[(Math.floor( Math.random() * phrases.length))];
  const characterArray = randomArray.split('');
  return characterArray;
}

function addPhraseToDisplay(arr) {
  const ul = phrase.firstElementChild;
  for (let i = 0; i < arr.length; i++) {
    let character = arr[i];
    let li = document.createElement('li');
    li.textContent = character;
    ul.appendChild(li);
    if (character === ' '){
      li.className = 'space';
    } else {
      li.className = 'letter';
    }
  }
}

function checkLetter(clickedLetter){
  let match = null;
  let letters = document.getElementsByClassName('letter');
  for (i = 0; i < letters.length; i ++) {
    if (clickedLetter === letters[i].textContent.toLowerCase()) {
      letters[i].classList.add('show');
      match = true;
    }
  }
    return match;
}


const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);


qwerty.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const chosen = e.target;
    chosen.classList.add('chosen');
    chosen.setAttribute("disabled", true);
    let letterFound = checkLetter(chosen.textContent);
    if(letterFound === null){
      missed += 1;
    }
  }
});
