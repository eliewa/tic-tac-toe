const userInput = document.getElementById('choice');
const button = document.getElementById('btn');
const squareOne = document.getElementById('square-1');
const squareTwo = document.getElementById('square-2');
const squareThree = document.getElementById('square-3');
const squareFour = document.getElementById('square-4');
const squareFive = document.getElementById('square-5');
const squareSix = document.getElementById('square-6');
const squareSeven = document.getElementById('square-7');
const squareEight = document.getElementById('square-8');
const squareNine = document.getElementById('square-9');
const alert = document.getElementById('alert');
const circleImagePath = '<img src="./assets/images/circle-icon.svg" alt="" />';
const xImagePath = '<img src="./assets/images/x-icon.svg" alt="" />';

const assignSquare = (event) => {
  event.preventDefault();
  const square = document.getElementById(`square-${userInput.value}`);
  console.log(square.innerHTML);
  if (userInput.value > 9 || userInput.value < 1) {
    alert.innerHTML = '* Invalid number';
    alert.style.display = 'block'; 
  } 
  else if (square.innerHTML === xImagePath || square.innerHTML === circleImagePath) {
    console.log('hello world');
    alert.innerHTML = '* Square is occupied';
    alert.style.display = 'block';
  } else {
    alert.style.display = 'none';
    square.innerHTML = xImagePath;
    console.log(square.value)
  }
 
}

button.addEventListener('click', assignSquare); 