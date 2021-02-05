document.addEventListener('DOMContentLoaded', function() {
  options=["Game1.html", "Game2.html", "Game3.html"] 
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, options);
});
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, options);
});
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.tooltipped');
  var instances = M.Tooltip.init(elems, options);
});

d3.select(".Dark")
  .on("click",() => {
  d3.select("body")
  .attr("class", "Dark1 body")
  })
d3.select(".Light")
  .on("click",() => {
  d3.select("body")
  .attr("class", "Light1 body")
  })


d3.select("#button1")
 .on("click",() => {
  P1Color = d3.select(".C4P1Color").text()
  P2Color = d3.select(".C4P2Color").text()
  turn=1
  if (P1Color==="Player 1 Color" || P2Color==="Player 2 Color"){
    M.toast({html: "Fill in all the Dropdowns"})
  }
  else if(P1Color===P2Color){
    M.toast({html: "You can't have the same Colors"})
  }
  else{
    grid=[["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""]]
    P1Color=P1Color.toLowerCase()
    P2Color=P2Color.toLowerCase()
    d3.select("#colorChoose")
      .attr("class","row center hide");
    d3.select("#button1")
      .attr("class", 'hide')
    d3.select(".grid2")
      .attr("class", "grid2 container")
    d3.select('#Game1')
      .attr("src", "Game1.js");
  }
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
  opponent=d3.select("#opp").text()
  if (opponent!=="Opponent"){
    d3.select("#button3")
    .attr("class","hide");
    d3.select('#opp')
      .attr("class", "hide");
    if (opponent==="Multiplayer"){
      d3.select("#button4")
      .attr("class", "waves-effect waves-light btn right bottom")
      d3.select('#multi')
      .attr("class", "row center");
    }
    else{
      d3.select("#button5")
      .attr("class", "waves-effect waves-light btn right bottom")
      d3.select("#CPU")
        .attr("class", "row center");
    }
  }
  else{
    M.toast({html: 'Choose an opponent'})
  }

    })

d3.select("#button4")
  .on("click",()=>{
    P1Icon = d3.select(".P1Icon").text()
    P1Color = d3.select(".P1Color").text()
    P2Icon = d3.select(".P2Icon").text()
    P2Color = d3.select(".P2Color").text()
    if (P1Icon==="Player 1 Icon" || P1Color==="Player 1 Color" || P2Icon==="Player 2 Icon" || P2Color==="Player 2 Color"){
      M.toast({html: "Fill in all the Dropdowns"})
    }
    else if(P1Icon===P2Icon){
      M.toast({html: "You can't have the same Icons"})
    }
    else{
      turn=1
      if (P1Icon==="X"){
        P1Icon="clear"
      }
      else if (P1Icon==="Check"){
        P1Icon="done"
      }
      else if (P1Icon==="Double Check"){
        P1Icon="done_all"
      }
      else{
        P1Icon="ac_unit"
      }
      if (P2Icon==="X"){
        P2Icon="clear"
      }
      else if (P2Icon==="Check"){
        P2Icon="done"
      }
      else if (P2Icon==="Double Check"){
        P2Icon="done_all"
      }
      else{
        P2Icon="ac_unit"
      }
      grid=[["","",""],["","",""],["","",""]]
      P1Color=P1Color.toLowerCase()
      P2Color=P2Color.toLowerCase()
      d3.select("#multi")
        .attr("class","row center hide");
      d3.select("#button4")
        .attr("class", 'hide')
      d3.select("#Preview")
        .attr("class", "material-icons hide")
      d3.select(".grid")
        .attr("class", "grid container")
      d3.select('#Game3')
        .attr("src", "Game3.js");
    }
})

d3.select("#button5")
  .on("click",()=>{
    P1Icon = d3.select(".P1Icon2").text()
    P1Color = d3.select(".P1Color2").text()
    if (P1Icon==="Player 1 Icon" || P1Color==="Player 1 Color"){
      M.toast({html: "Fill in all the Dropdowns"})
    }
    else{
      if (P1Icon==="X"){
        P1Icon="clear"
      }
      else if (P1Icon==="Check"){
        P1Icon="done"
      }
      else if (P1Icon==="Double Check"){
        P1Icon="done_all"
      }
      else{
        P1Icon="ac_unit"
      }
      P1Color=P1Color.toLowerCase()
      for (var same=true;same===true;same=same){
        var iconNum=Math.ceil(Math.random()*4)
        if (iconNum===1){
          P2Icon="clear"
        }
        else if (iconNum===2){
          P2Icon="done"
        }
        else if (iconNum===3){
          P2Icon="done_all"
        }
        else{
          P2Icon="ac_unit"
        }
        var colorNum=Math.ceil(Math.random()*4)
        if (colorNum===1){
          P2Color="red"
        }
        else if (colorNum===2){
          P2Color="blue"
        }
        else if (colorNum===3){
          P2Color="purple"
        }
        else{
          P2Color="black"
        }
        if(P1Icon!==P2Icon){
          same=false
        }
      }

      grid=[["","",""],["","",""],["","",""]]
      d3.select("#button5")
      .attr("class", 'hide')
      d3.select("#CPU")
        .attr("class","row center hide");
      d3.select("#Preview")
        .attr("class", "material-icons hide")
      d3.select('#Game3')
        .attr("src", "Game3.js");
      d3.select(".grid")
        .attr("class", "grid container")
    }
})

d3.select("#opponent1")
    .on("click",() => {
      d3.select("#opp").text("Multiplayer")
    })
d3.select("#opponent2")
    .on("click",() => {
      d3.select("#opp").text("CPU Easy")
    })
d3.select("#opponent3")
    .on("click",() => {
      d3.select("#opp").text("CPU Medium")
    })
d3.select("#opponent4")
    .on("click",() => {
      d3.select("#opp").text("CPU Hard")
    })
d3.select(".color1")
  .on("click",() => {
    d3.select("#Preview").attr("class", "row center")
    d3.select(".P1Color").text("Red").attr("class","dropdown-trigger btn red P1Color")
    d3.select("#P1Preview").attr("class", "material-icons red-text")
  })
d3.select(".color2")
    .on("click",() => {
      d3.select("#Preview").attr("class", "row center")
      d3.select(".P1Color").text("Blue").attr("class","dropdown-trigger btn blue P1Color")
      d3.select("#P1Preview").attr("class", "material-icons blue-text")
    })
d3.select(".color3")
    .on("click",() => {
      d3.select("#Preview").attr("class", "row center")
      d3.select(".P1Color").text("Purple").attr("class","dropdown-trigger btn purple P1Color")
      d3.select("#P1Preview").attr("class", "material-icons purple-text")
    })
d3.select(".color4")
    .on("click",() => {
      d3.select("#Preview").attr("class", "row center")
      d3.select(".P1Color").text("Black").attr("class","dropdown-trigger btn black P1Color")
      d3.select("#P1Preview").attr("class", "material-icons black-text")
    })

d3.select(".icon1")
    .on("click",() => {
      d3.select("#Preview").attr("class", "row center")
      d3.select(".P1Icon").text("X")
      d3.select("#P1Preview").text("clear")
    })
d3.select(".icon2")
    .on("click",() => {
      d3.select("#Preview").attr("class", "row center")
      d3.select(".P1Icon").text("Check")
      d3.select("#P1Preview").text("done")
    })
d3.select(".icon3")
    .on("click",() => {
      d3.select("#Preview").attr("class", "row center")
      d3.select(".P1Icon").text("Double Check")
      d3.select("#P1Preview").text("done_all")
    })
d3.select(".icon4")
    .on("click",() => {
      d3.select("#Preview").attr("class", "row center")
      d3.select(".P1Icon").text("Snowflake")
      d3.select("#P1Preview").text("ac_unit")
    })
d3.select(".color5")
.on("click",() => {
  d3.select("#Preview").attr("class", "row center")
  d3.select(".P2Color").text("Red").attr("class","dropdown-trigger btn red P2Color")
  d3.select("#P2Preview").attr("class", "material-icons red-text")
})
d3.select(".color6")
    .on("click",() => {
      d3.select("#Preview").attr("class", "row center")
      d3.select(".P2Color").text("Blue").attr("class","dropdown-trigger btn blue P2Color")
      d3.select("#P2Preview").attr("class", "material-icons blue-text")
    })
d3.select(".color7")
    .on("click",() => {
      d3.select("#Preview").attr("class", "row center")
      d3.select(".P2Color").text("Purple").attr("class","dropdown-trigger btn purple P2Color")
      d3.select("#P2Preview").attr("class", "material-icons purple-text")
    })
d3.select(".color8")
  .on("click",() => {
    d3.select("#Preview").attr("class", "row center")
    d3.select(".P2Color").text("Black").attr("class","dropdown-trigger btn black P2Color")
    d3.select("#P2Preview").attr("class", "material-icons black-text")
  })

d3.select(".icon5")
  .on("click",() => {
    d3.select("#Preview").attr("class", "row center")
    d3.select(".P2Icon").text("X")
    d3.select("#P2Preview").text("clear")
})
d3.select(".icon6")
    .on("click",() => {
      d3.select("#Preview").attr("class", "row center")
      d3.select(".P2Icon").text("Check")
      d3.select("#P2Preview").text("done")
    })
d3.select(".icon7")
    .on("click",() => {
      d3.select("#Preview").attr("class", "row center")
      d3.select(".P2Icon").text("Double Check")      
      d3.select("#P2Preview").text("done_all")
    })
d3.select(".icon8")
    .on("click",() => {
      d3.select("#Preview").attr("class", "row center")
      d3.select(".P2Icon").text("Snowflake")
      d3.select("#P2Preview").text("ac_unit")
    })

d3.select(".color9")
.on("click",() => {
  d3.select("#Preview").attr("class", "row center")
  d3.select(".P1Color2").text("Red").attr("class","dropdown-trigger btn red P1Color2")
  d3.select("#P1Preview").attr("class", "material-icons red-text")
})
d3.select(".color10")
    .on("click",() => {
      d3.select("#Preview").attr("class", "row center")
      d3.select(".P1Color2").text("Blue").attr("class","dropdown-trigger btn blue P1Color2")
      d3.select("#P1Preview").attr("class", "material-icons blue-text")
    })
d3.select(".color11")
    .on("click",() => {
      d3.select("#Preview").attr("class", "row center")
      d3.select(".P1Color2").text("Purple").attr("class","dropdown-trigger btn purple P1Color2")
      d3.select("#P1Preview").attr("class", "material-icons purple-text")
    })
d3.select(".color12")
  .on("click",() => {
    d3.select("#Preview").attr("class", "row center")
    d3.select(".P1Color2").text("Black").attr("class","dropdown-trigger btn black P1Color2")
    d3.select("#P1Preview").attr("class", "material-icons black-text")
    
  })

d3.select(".icon9")
  .on("click",() => {
    d3.select("#Preview").attr("class", "row center")
    d3.select(".P1Icon2").text("X")
    d3.select("#P1Preview").text("clear")
})
d3.select(".icon10")
    .on("click",() => {
      d3.select("#Preview").attr("class", "row center")
      d3.select(".P1Icon2").text("Check")
      d3.select("#P1Preview").text("done")
    })
d3.select(".icon11")
    .on("click",() => {
      d3.select("#Preview").attr("class", "row center")
      d3.select(".P1Icon2").text("Double Check")
      d3.select("#P1Preview").text("done_all")
    })
d3.select(".icon12")
    .on("click",() => {
      d3.select("#Preview").attr("class", "row center")
      d3.select(".P1Icon").text("Snowflake")
      d3.select("#P1Preview").text("ac_unit")
    })

d3.select(".C4color1")
    .on("click",()=>{
      d3.select(".C4P1Color").text("Red").attr("class", "dropdown-trigger btn red C4P1Color")
    })
d3.select(".C4color2")
    .on("click",()=>{
      d3.select(".C4P1Color").text("Yellow").attr("class", "dropdown-trigger btn yellow C4P1Color")
    })
d3.select(".C4color3")
    .on("click",()=>{
      d3.select(".C4P1Color").text("Purple").attr("class", "dropdown-trigger btn purple C4P1Color")
    })
d3.select(".C4color4")
    .on("click",()=>{
      d3.select(".C4P1Color").text("Black").attr("class", "dropdown-trigger btn black C4P1Color")
    })
d3.select(".C4color5")
    .on("click",()=>{
      d3.select(".C4P2Color").text("Red").attr("class", "dropdown-trigger btn red C4P2Color")
    })
d3.select(".C4color6")
    .on("click",()=>{
      d3.select(".C4P2Color").text("Yellow").attr("class", "dropdown-trigger btn yellow C4P2Color")
    })
d3.select(".C4color7")
    .on("click",()=>{
      d3.select(".C4P2Color").text("Purple").attr("class", "dropdown-trigger btn purple C4P2Color")
    })
d3.select(".C4color8")
    .on("click",()=>{
      d3.select(".C4P2Color").text("Black").attr("class", "dropdown-trigger btn black C4P2Color")
    })

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(elems, options);
});


d3.select("#coinFlip")
  .on("click",()=>{
  var result=Math.ceil(Math.random()*2)
  if (result===1){
    M.toast({html: 'Heads!'})
  }
  else{
    M.toast({html: 'Tails!'})
  }
})

d3.select("#dieRoll")
  .on("click", ()=>{
    var result=Math.ceil(Math.random()*6)
    M.toast({html: result.toString()})
})