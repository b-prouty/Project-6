const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;
const overlay = document.getElementById('overlay');
const startButton =
document.querySelector('a.btn__reset');
const phrases = [
  ['A fish out of water'],
  ['Break a leg'],
  ['Cat got your tongue'],
  ['High and dry'],
  ['The whole shebang']
];


startButton.addEventListener('click', () => {
  overlay.style.display = 'none';
});

function getRandomPhrasesAsArray(array) {
  var randomArray = array[Math.floor( Math.random() * array.length)];
  return randomArray;
}

function addPhraseToDisplay(arr){
  for (let i = 0; i < arr.length; i++) {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    const character = i.textContent;
    li.textContent = character;
    ul.appendChild(li);
  }
}


const phraseArray = getRandomPhrasesAsArray(phrases);
