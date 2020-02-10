/////////Variables
const deck = [
  { suit: 'Diamonds', value: 2, imageURL: 'JPEG/2D.jpg' },
  { suit: 'Diamonds', value: 3, imageURL: 'JPEG/3D.jpg' },
  { suit: 'Diamonds', value: 4, imageURL: 'JPEG/4D.jpg' },
  { suit: 'Diamonds', value: 5, imageURL: 'JPEG/5D.jpg' },
  { suit: 'Diamonds', value: 6, imageURL: 'JPEG/6D.jpg' },
  { suit: 'Diamonds', value: 7, imageURL: 'JPEG/7D.jpg' },
  { suit: 'Diamonds', value: 8, imageURL: 'JPEG/8D.jpg' },
  { suit: 'Diamonds', value: 9, imageURL: 'JPEG/9D.jpg' },
  { suit: 'Diamonds', value: 10, imageURL: 'JPEG/10D.jpg' },
  { suit: 'Diamonds', value: [11, 1], imageURL: 'JPEG/AD.jpg' },
  { suit: 'Diamonds', value: 10, imageURL: 'JPEG/JD.jpg' },
  { suit: 'Diamonds', value: 10, imageURL: 'JPEG/QD.jpg' },
  { suit: 'Diamonds', value: 10, imageURL: 'JPEG/KD.jpg' },
  { suit: 'Hearts', value: 2, imageURL: 'JPEG/2H.jpg' },
  { suit: 'Hearts', value: 3, imageURL: 'JPEG/3H.jpg' },
  { suit: 'Hearts', value: 4, imageURL: 'JPEG/4H.jpg' },
  { suit: 'Hearts', value: 5, imageURL: 'JPEG/5H.jpg' },
  { suit: 'Hearts', value: 6, imageURL: 'JPEG/6H.jpg' },
  { suit: 'Hearts', value: 7, imageURL: 'JPEG/7H.jpg' },
  { suit: 'Hearts', value: 8, imageURL: 'JPEG/8H.jpg' },
  { suit: 'Hearts', value: 9, imageURL: 'JPEG/9H.jpg' },
  { suit: 'Hearts', value: 10, imageURL: 'JPEG/10H.jpg' },
  { suit: 'Hearts', value: [11, 1], imageURL: 'JPEG/AH.jpg' },
  { suit: 'Hearts', value: 10, imageURL: 'JPEG/JH.jpg' },
  { suit: 'Hearts', value: 10, imageURL: 'JPEG/QH.jpg' },
  { suit: 'Hearts', value: 10, imageURL: 'JPEG/KH.jpg' },
  { suit: 'Clubs', value: 2, imageURL: 'JPEG/2C.jpg' },
  { suit: 'Clubs', value: 3, imageURL: 'JPEG/3C.jpg' },
  { suit: 'Clubs', value: 4, imageURL: 'JPEG/4C.jpg' },
  { suit: 'Clubs', value: 5, imageURL: 'JPEG/5C.jpg' },
  { suit: 'Clubs', value: 6, imageURL: 'JPEG/6C.jpg' },
  { suit: 'Clubs', value: 7, imageURL: 'JPEG/7C.jpg' },
  { suit: 'Clubs', value: 8, imageURL: 'JPEG/8C.jpg' },
  { suit: 'Clubs', value: 9, imageURL: 'JPEG/9C.jpg' },
  { suit: 'Clubs', value: 10, imageURL: 'JPEG/10C.jpg' },
  { suit: 'Clubs', value: [11, 1], imageURL: 'JPEG/AC.jpg' },
  { suit: 'Clubs', value: 10, imageURL: 'JPEG/JC.jpg' },
  { suit: 'Clubs', value: 10, imageURL: 'JPEG/QC.jpg' },
  { suit: 'Clubs', value: 10, imageURL: 'JPEG/KC.jpg' },
  { suit: 'Spades', value: 2, imageURL: 'JPEG/2S.jpg' },
  { suit: 'Spades', value: 3, imageURL: 'JPEG/3S.jpg' },
  { suit: 'Spades', value: 4, imageURL: 'JPEG/4S.jpg' },
  { suit: 'Spades', value: 5, imageURL: 'JPEG/5S.jpg' },
  { suit: 'Spades', value: 6, imageURL: 'JPEG/6S.jpg' },
  { suit: 'Spades', value: 7, imageURL: 'JPEG/7S.jpg' },
  { suit: 'Spades', value: 8, imageURL: 'JPEG/8S.jpg' },
  { suit: 'Spades', value: 9, imageURL: 'JPEG/9S.jpg' },
  { suit: 'Spades', value: 10, imageURL: 'JPEG/10S.jpg' },
  { suit: 'Spades', value: [11, 1], imageURL: 'JPEG/AS.jpg' },
  { suit: 'Spades', value: 10, imageURL: 'JPEG/JS.jpg' },
  { suit: 'Spades', value: 10, imageURL: 'JPEG/QS.jpg' },
  { suit: 'Spades', value: 10, imageURL: 'JPEG/KS.jpg' }
];
let dealerPoints = document.getElementById('dealer-points');
let playerPoints = document.getElementById('player-points');
let dealerValue = 0;
let playerValue = 0;
dealerHandValue = [];
playerHandValue = [];

////////////Functions
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
function addingInitialValues() {
  dealerValue = dealerHandValue[0] + dealerHandValue[1];
  playerValue = playerHandValue[0] + playerHandValue[1];
}
function addingPlayerHitValues() {
  let hitTotal = playerValue + playerHandValue[0];
  playerValue = hitTotal;
}

function deal() {
  shuffleArray(deck);
  dealerHandValue = [];
  playerHandValue = [];
  let deal1 = document.createElement('IMG');
  deal1.src = deck[0].imageURL;
  deal1.className = 'hand-img';
  dealerHandValue.push(deck[0].value);
  deck.shift();

  let deal2 = document.createElement('IMG');
  deal2.src = deck[0].imageURL;
  deal2.className = 'hand-img';
  dealerHandValue.push(deck[0].value);
  deck.shift();
  let dealer1 = document.getElementById('dealer-hand');
  dealer1.append(deal1, deal2);

  let play1 = document.createElement('IMG');
  play1.src = deck[0].imageURL;
  play1.className = 'hand-img';
  playerHandValue.push(deck[0].value);
  deck.shift();
  let play2 = document.createElement('IMG');
  play2.src = deck[0].imageURL;
  play2.className = 'hand-img';
  playerHandValue.push(deck[0].value);
  deck.shift();
  let player1 = document.getElementById('player-hand');
  player1.append(play1, play2);
  addingInitialValues();
}

function hit() {
  playerHandValue = [];
  let playhit = document.createElement('IMG');
  playhit.src = deck[0].imageURL;
  playhit.className = 'hand-img';
  playerHandValue.push(deck[0].value);
  deck.shift();
  let player1 = document.getElementById('player-hand');
  player1.append(playhit);
  addingPlayerHitValues();
}

////// Event Listenters

document.getElementById('deal-button').addEventListener('click', function(e) {
  deal();
  console.log(dealerValue);
  console.log(playerValue);
});

document.getElementById('hit-button').addEventListener('click', function(e) {
  hit();
  console.log(playerValue);
});

document
  .getElementById('stand-button')
  .addEventListener('click', function(e) {});
