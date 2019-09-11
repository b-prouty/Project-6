const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;
const overlay = document.getElementById('overlay');
const startButton =
document.querySelector('a.btn__reset');
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
      li.className = '';
    } else {
      li.className = 'letter';
    }
  }
}


const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);
