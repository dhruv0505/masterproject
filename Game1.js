
function dead(){
   
}
for (var i=0;i<10; i++){

   if (round===5){
      score=score+1
   }
   alert(score)
   d3.select('#score').text(`Score: ${score.toString()}`);
}
