document.addEventListener('DOMContentLoaded', function() {
  options=["Game1.html", "Game2.html", "Game3.html"] 
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, options);
});
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, options);
});

d3.select("#button1")
 .on("click",() => {
  round=1
  score=0
  d3.select("#button1")
    .attr("class","hide");
  d3.select("#player")
    .attr("class","blue");
  d3.select(".obstacle")
    .attr("class","material-icons green-text text-darken-3 hide right obstacle");
  d3.select('#Game1')
    .attr("src", "Game1.js");
     })

d3.select("#button2")
  .on("click",() => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  remaining = 25
  var numLettersPerWord = d3.select('#length').property("value");
  if (numLettersPerWord==="4"){
    currentWord = fourLetterWords[getRandomInt(fourLetterWords.length)];
    d3.select("#button2")
    .attr("class","hide");
    d3.select("#dguess")
      .attr("class", "hide")
    d3.select("#guess")
      .attr("class", "validate")
    d3.select('#Game2')
      .attr("src", "Game2.js");
    d3.select('#Results').text("").attr("class", "center");
    d3.select('#Remaining').text(`You have 25 guesses left.`).attr("class", "center");
  }
  else if (numLettersPerWord==="5"){
    currentWord = fiveLetterWords[getRandomInt(fiveLetterWords.length)];
    d3.select("#button2")
    .attr("class","hide");
    d3.select("#dguess")
      .attr("class", "hide")
    d3.select("#guess")
      .attr("class", "validate")
    d3.select('#Game2')
      .attr("src", "Game2.js");
    d3.select('#Results').text("").attr("class", "center");
    d3.select('#Remaining').text(`You have 25 guesses left.`).attr("class", "center");
  }
  else{
    M.toast({html: `Please chooose 4 or 5.`})
  }
})


d3.select("#button3")
  .on("click",() => {
  d3.select("#button3")
    .attr("class","hide");
  d3.select('#Game3')
    .attr("src", "Game3.js");
    })