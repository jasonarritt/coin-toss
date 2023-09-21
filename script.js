const message = document.querySelector('.message');
const buttons = document.querySelectorAll('button');
const coinArray = ['Front', 'Back'];
let score = [0, 0];

message.textContent = 'Welcome! Please select either Front or Back.';

for (let i = 0; i < buttons.length; i++) {
  console.log(buttons[i]);
  buttons[i].addEventListener('click', tossCoin);
}

function tossCoin(event) {
  let playerGuess = event.target.innerText;
  let computerToss = Math.floor(Math.random() * 2);
  let computerChoice = coinArray[computerToss];
  let output;
  message.innerHTML = 'Computer Selected: ' + computerChoice + '<br>';

  if (playerGuess === computerChoice) {
    // Win
    output = 'Player Wins.';
    score[0]++;
  } else {
    // Lose
    output = 'Computer Wins.';
    score[1]++;
  }
  message.innerHTML +=
    output + '<br>Player: ' + score[0] + ' Computer: ' + score[1];
}
