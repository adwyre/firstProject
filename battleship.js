var location1 = 1;
var location2 = 2;
var location3 = 3;
var guess;
var guessCount = 0;
var hitCount = 0;
var isSunk = false;

while (isSunk == false) {
  guess = prompt("Enter number 0-6:");
  if (guess < 0 || guess > 6) {
    alert("Enter valid number 0-6");
  } else {
    guessCount += 1;
  
    if (guess == location1 || guess == location2 || guess == location3) {
    hitCount += 1;
    alert ("hit");
      if (hitCount == 3){
      isSunk = true;
      alert ("You sunk my battleship!");
      } 
    } else {
    alert ("miss");
    }
  }  
}
var stats = "You took " + guessCount + "guesses to sink the battleship, whic means your shooting accuracy was " +
    (3/guessCount);
alert (stats);
