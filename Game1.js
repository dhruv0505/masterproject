
function dead(){
   
}
for (var i=0;i<10; i++){

   if (round===5){
      score=score+1
   }
   alert(score)
   d3.select('#score').text(`Score: ${score.toString()}`);
}
var keyPressed = [];

d3.select('body')  
  .on('keypress', function() {
      console.log(d3.event.keyCode)
    if (d3.event.keyCode === 13){
       console.log("test")
    }
  });
