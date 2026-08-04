# Projects related to DOM

## project link

[Click here ](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 1 Solution

```javascript
console.log("hitesh");

const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

## Project 2 Solution

```javascript
const form = document.querySelector("form");
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // Show The Result
    result.innerHTML = `<span>${bmi}</span>`;
  }
});
```

## Project 3 Solution

```javascript
const clock = document.getElementById("clock");
//const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleDateString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

## Project 4 Solution

```javascript
const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const gussSlot = document.querySelector("guesses");
const remaining = document.querySelector("lastResult");
const lowOrHi = document.querySelector("lowOrHi");
const startOver = document.querySelector("resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("PLease Enter a Valid Number");
  } else if (guess < 1) {
    alert("PLease Enter a Number More Than 1");
  } else if (guess > 100) {
    alert("PLease Enter a Number Less Than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMassage(`Game Over, Random Number Was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMassage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMassage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMassage(`Number is TOOO high`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}`;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMassage(massage) {
  //
}

function endGame() {
  //
}

function newGame() {
  //
}
```
