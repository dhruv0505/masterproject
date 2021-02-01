function checkValid(guess, length){
  if (guess.length===length){
    if (guess.length===4){
      for (var i =0; i < fourLetterWords.length; i++){
        if (guess===fourLetterWords[i]){
          return true;
        }
      }
    }
    else if (guess.length===5){
      for (var i =0; i < fiveLetterWords.length; i++){
        if (guess===fiveLetterWords[i]){
          return true;
        }
      }
    }
  }
  return false;
}
function countCowsBulls(guess) {
  if (!checkValid(guess, currentWord.length)) {
    M.toast({html: 'Your guess is not a valid word. If you are confused see the rules below.'})
    return("Invalid")
  }
  else{
    var cows = 0;
    var bulls = 0;
    for (var i=0; i < guess.length; i++) {
      for (var y=0; y < guess.length; y++) {
        if (guess[y] == currentWord[i] && y != i) {
          cows = cows+1
        }
        else if (guess[y] == currentWord[i] && y == i) {
          bulls = bulls + 1
        }
      }
    }
    cows=cows.toString()
    bulls=bulls.toString()

    return {
      'cows': cows,
      'bulls': bulls
  } 
  }}
d3.select("#confirm")
  .on("click", () => {
    let guess = d3.select('#guess1').property("value");
    if (guess===currentWord || remaining ===1){
      if (guess===currentWord){
        M.toast({html: `You Won with ${remaining} guesses remaining!`})
      }
      else{
        M.toast({html: `You lost because you had no guesses left!`})
      }
      d3.select("#button2")
      .attr("class","waves-effect waves-light btn");
      d3.select("#dguess")
        .attr("class", "col s12")
      d3.select("#guess")
        .attr("class", "hide")
      d3.select("#Game2")
        .attr("src", "")
    }
    if (countCowsBulls(guess) !== "Invalid") {
      cows=countCowsBulls(guess).cows;
      bulls=countCowsBulls(guess).bulls;
      CowsBulls="Cows: " + cows + " Bulls: " + bulls
      d3.select('#Results').text(CowsBulls);
      remaining = remaining -1
      if (remaining===0){
        remaining=25
      }
      d3.select('#Remaining').text(`You have ${remaining.toString()} guesses left.`);
    }    
  })

var input = document.getElementById("#guess1");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keypress", function(event) {
  // Number 13 is the "Enter" key on the keyboard

  let guess = d3.select('#guess1').property("value");
  if (guess===currentWord || remaining ===1){
    if (guess===currentWord){
      M.toast({html: `You Won with ${remaining} guesses remaining!`})
    }
    else{
      M.toast({html: `You lost because you had no guesses left!`})
    }
    d3.select("#button2")
    .attr("class","waves-effect waves-light btn");
    d3.select("#dguess")
      .attr("class", "col s12")
    d3.select("#guess")
      .attr("class", "hide")
    d3.select("#Game2")
      .attr("src", "")
  }
  if (countCowsBulls(guess) !== "Invalid") {
    cows=countCowsBulls(guess).cows;
    bulls=countCowsBulls(guess).bulls;
    CowsBulls="Cows: " + cows + " Bulls: " + bulls
    d3.select('#Results').text(CowsBulls);
    remaining = remaining -1
    if (remaining===0){
      remaining=25
    }
    d3.select('#Remaining').text(`You have ${remaining.toString()} guesses left.`);
  }    
  }
);



