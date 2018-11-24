var location1 = 1;
var location2 = 2;
var location3 = 3;
var guess;
var guessCount = 0;
var hitCount = 0;
var isSunk = false;
while (isSunk == false) {
  guess = prompt("Enter number 0-6:");
  if (guess < 0 || > 6) {
    alert("Enter valid number 0-6");
  } else if (guess == location1 || location2 || location3) {
    guessCount += 1;
    hitCount += 1;
    alert "hit";
  } else (guess !== location1 || location2 || location3){
    guessCount += 1;
    alert "miss";
  }
if (hitCount == 3){
  isSunk = true;
  alert "You sunk my battleship! Guesses: + 'guessCount'";
}
}
