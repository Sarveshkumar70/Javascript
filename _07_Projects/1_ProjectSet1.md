# Projects related to DOM


## Solution code

### Project 1 - Color Changer

```javascript 

const myButtons = document.querySelectorAll('.button');
const docBody = document.querySelector('body');

myButtons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);

    const getColor = e.target.id;

    // if(getColor == 'grey'){
    //   docBody.style.backgroundColor = getColor
    // }
    // else if(getColor == 'white'){
    //   docBody.style.backgroundColor = getColor
    // }
    // else if(getColor == 'blue'){
    //   docBody.style.backgroundColor = getColor
    // }
    // else if(getColor == 'yellow'){
    //   docBody.style.backgroundColor = getColor
    // }

    // or

    switch (getColor) {
      case 'grey':
        docBody.style.backgroundColor = getColor;
        break;
      case 'white':
        docBody.style.backgroundColor = getColor;
        break;
      case 'blue':
        docBody.style.backgroundColor = getColor;
        break;
      case 'yellow':
        docBody.style.backgroundColor = getColor;
        break;
    }
  });
});


```



### Project 2 - BMI calculator

```javascript

const myform = document.querySelector('form')

// const height = parseInt(document.querySelector('#height').value)

// for above line - we dont want to send empty values on page loading, we want to send only in submit event so define this in addEventListener

myform.addEventListener('submit',function(e){

  e.preventDefault() // we don't want (here) to send form data to server, so prevent the default behavior of form

// used parseInt - to convert string values to int
const height = parseInt(document.querySelector('#height').value)
const weight = parseInt(document.querySelector('#weight').value)

const result = (document.querySelector('#results'))


if(height === ''  || height < 0 || isNaN(height))
{
  result.innerHTML = `${height}, not valid Height`;
}
else if(weight === ''  || weight < 0 || isNaN(weight))
{
  result.innerHTML = `${weight}, not valid weight`;
}
else{
  const bmi = ( weight / ((height*height) /10000) ).toFixed(2);

  // displaying the result
  // result.innerHTML = `<span> ${bmi} </span>`
  if( bmi < 18.6){
    result.innerHTML  = `<span> Bmi = ${bmi}, which is under weight </span>`
  } else if(bmi >= 18.6 && bmi <= 24.9){
    result.innerHTML =  `<span> Bmi = ${bmi}, which is healthy </span>`
  }else{
    result.innerHTML = `<span> Bmi = ${bmi}, which is Overweight </span>`
  }
}

});


```


### Project 3 - Digital clock

```javascript

const clock = document.getElementById('clock');

// const date = new Date();
// console.log(date.toLocaleTimeString());

setInterval(function () {

  const date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();

}, 1000);


```


### Project 4 - GuessTheNumber

```javascript

const randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');

const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const gameOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuessArray = [];
let countOfGuesses = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault(); // do not want to send data to server
    const guess = parseInt(userInput.value);

    validate_user_input(guess);
  });
}

// for checking whether userInput is acceptable or not
function validate_user_input(guess) {
  if (isNaN(guess)) {
    alert('PLEASE! Enter a correct number');
  } else if (guess < 1) {
    alert('PLEASE! Enter a number greater than 1');
  } else if (guess > 100) {
    alert('PLEASE! Enter a number less than 101');
  } else {
    prevGuessArray.push(guess);
    if (countOfGuesses > 10) {
      displayGuess(guess);
      displayMessage(`GAME OVER!, Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed CORRECT!`);
  } else if (guess < randomNumber) {
    displayMessage(`Your guessed number is low!`);
  } else if (guess > randomNumber) {
    displayMessage(`Your guessed number is high!`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += ` ${guess}, `;
  countOfGuesses++;
  remaining.innerHTML = `${11 - countOfGuesses}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled','');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newgame">Start new game </h2>`;
  gameOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newgameButton = document.getElementById('newgame');
  newgameButton.addEventListener('click', (e) => {
    const randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuessArray = []
    countOfGuesses = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - countOfGuesses}`;
    userInput.removeAttribute('disabled') //for removing disabled
    gameOver.removeAttribute(p)

  });
}


```

### Project - 5 KeyboardCheck

```javascript
const inert = document.querySelector('#insert');

window.addEventListener('keydown',(e)=>{
  inert.innerHTML = `
  <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key  === ' ' ? 'Space' : e.key }</td>
    <td>${e.keyCode }</td>
    <td>${e.code}</td>
  </tr>
</table>
  `
});

```


### Project - 6  Unlimited colors

```javascript

let randomColor = function(){
  const hexValues = '0123456789ABCDEF'
  let mycolor = '#'

  for(let i = 0; i < 6; i++){
    mycolor += hexValues[Math.floor(Math.random()*16)]
  }
  return mycolor;
};

let stopColor;

const changeBgColor = function(){
 stopColor = setInterval(function(){
    document.body.style.backgroundColor = randomColor();
 },1000)
}

const stopBgColor = function(){
  clearInterval(stopColor);
  stopColor=null;
}

document.querySelector('#start').addEventListener('click',changeBgColor)

document.querySelector('#stop').addEventListener('click',stopBgColor)


```