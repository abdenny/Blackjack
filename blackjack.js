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
  { suit: 'Diamonds', value: 11, imageURL: 'JPEG/AD.jpg' },
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
  { suit: 'Hearts', value: 11, imageURL: 'JPEG/AH.jpg' },
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
  { suit: 'Clubs', value: 11, imageURL: 'JPEG/AC.jpg' },
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
  { suit: 'Spades', value: 11, imageURL: 'JPEG/AS.jpg' },
  { suit: 'Spades', value: 10, imageURL: 'JPEG/JS.jpg' },
  { suit: 'Spades', value: 10, imageURL: 'JPEG/QS.jpg' },
  { suit: 'Spades', value: 10, imageURL: 'JPEG/KS.jpg' }
];
let dealerPoints = document.getElementById('dealer-points');
let playerPoints = document.getElementById('player-points');
let playerValueDisplayTotal = document.getElementById('player');
let dealerValueDisplayTotal = document.getElementById('dealer');
let dealerValue = 0;
let playerValue = 0;
let playerAceCount = 0;
let dealerAceCount = 0;
dealerHandValue = [];
playerHandValue = [];

////////////Functions
function displayValues() {
  playerValueDisplayTotal.innerHTML = 'Player: ' + playerValue;
  dealerValueDisplayTotal.innerHTML = 'Dealer: ' + dealerValue;
}

function displayWin() {
  let overlayDiv = document.createElement('div');
  overlayDiv.setAttribute('id', 'overlay');
  overlayDiv.setAttribute(
    'style',
    'position:absolute; width:100%; height: 250px; background-image: linear-gradient(to right, rgba(255,255,0,0), rgba(255,255,0,1), rgba(255,255,0,0)); top: 200px; text-align: center; font-size: 72px; opacity: 1;'
  );
  overlayDiv.textContent = 'You Win! Press deal to play again...';
  document.body.appendChild(overlayDiv);
}
function displayLoss() {
  var overlayDiv = document.createElement('div');
  overlayDiv.setAttribute('id', 'overlay');
  overlayDiv.setAttribute(
    'style',
    'position:absolute; width:90%; height: 250px; background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1), rgba(255,0,0,0)); top: 200px; text-align: center; font-size: 72px; opacity: 1;'
  );
  overlayDiv.textContent = 'You Lose! Press deal to play again...';
  document.body.appendChild(overlayDiv);
}

function displayTie() {
  var overlayDiv = document.createElement('div');
  overlayDiv.setAttribute('id', 'overlay');
  overlayDiv.setAttribute(
    'style',
    'position:absolute; width:90%; height: 250px; background-image:  linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%); top: 200px; text-align: center; font-size: 72px; opacity: 1;'
  );
  overlayDiv.textContent = 'You Tie! Press deal to play again...';
  document.body.appendChild(overlayDiv);
}

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
  if (playerHandValue[0] == 11 && playerValue >= 11) {
    playerValue = playerValue - 10;
  }
}

function checkValue() {
  if (playerValue <= 21 && dealerValue <= 21) {
    //dealer method
    if (playerValue > dealerValue) {
      displayWin();
    } else if (dealerValue > playerValue) {
      displayLoss();
    } else {
      displayTie();
    }
  } else if (playerValue > 21) {
    displayLoss();
  } else if (dealerValue > 21) {
    displayWin();
  }
}
function endGame() {
  if (playerValue >= 21) {
    checkValue();
  }
}

function deal() {
  shuffleArray(deck);
  dealerHandValue = [];
  playerHandValue = [];
  let dealer1 = document.getElementById('dealer-hand');
  let player1 = document.getElementById('player-hand');
  dealer1.innerHTML = '';
  player1.innerHTML = '';
  let deal1 = document.createElement('IMG');
  deal1.src = deck[0].imageURL;
  deal1.className = 'hand-img';
  if (deck[0].value == 11) {
    dealerHandValue.push(deck[0].value);
    dealerAceCount++;
  } else {
    dealerHandValue.push(deck[0].value);
  }
  deck.shift();
  let deal2 = document.createElement('IMG');
  deal2.src = deck[0].imageURL;
  deal2.className = 'hand-img';
  if (deck[0].value == 11) {
    dealerAceCount.push(deck[0].value);
    aceCount++;
  } else {
    dealerHandValue.push(deck[0].value);
  }
  deck.shift();
  dealer1.append(deal1, deal2);
  let play1 = document.createElement('IMG');
  play1.src = deck[0].imageURL;
  play1.className = 'hand-img';
  if (deck[0].value == 11) {
    playerHandValue.push(deck[0].value);
    playerAceCount++;
  } else {
    playerHandValue.push(deck[0].value);
  }
  deck.shift();
  let play2 = document.createElement('IMG');
  play2.src = deck[0].imageURL;
  play2.className = 'hand-img';
  if (deck[0].value == 11) {
    playerHandValue.push(deck[0].value);
    playerAceCount++;
  } else {
    playerHandValue.push(deck[0].value);
  }
  deck.shift();
  player1.append(play1, play2);
  addingInitialValues();
  displayValues();
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
  displayValues();
}
// function dealerHit() {
//   playerHandValue = [];
//   let playhit = document.createElement('IMG');
//   playhit.src = deck[0].imageURL;
//   playhit.className = 'hand-img';
//   playerHandValue.push(deck[0].value);
//   deck.shift();
//   let player1 = document.getElementById('player-hand');
//   player1.append(playhit);
//   addingPlayerHitValues();

////// Event Listenters

document.getElementById('deal-button').addEventListener('click', function(e) {
  deal();
  console.log(dealerValue);
  console.log(playerValue);
  console.log(playerAceCount);
  endGame();
});

document.getElementById('hit-button').addEventListener('click', function(e) {
  hit();
  console.log(playerValue);
  endGame();
});

document.getElementById('stand-button').addEventListener('click', function(e) {
  checkValue();
});
