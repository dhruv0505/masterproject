function findSpot(col, grid){
   for (var row=6;row>0;row--){
      if (grid[col-1][row-1]==""){
         return(row)
      }
   }
   return("Full")
}

function checkWin(grid, icon){
   for (var i = 0; i<7; i++){
     if ((grid[i][0]===icon && grid[i][1]===icon && grid[i][2]===icon && grid[i][3]===icon) || (grid[i][1]===icon && grid[i][2]===icon && grid[i][3]===icon && grid[i][4]===icon) || (grid[i][2]===icon && grid[i][3]===icon && grid[i][4]===icon && grid[i][5]===icon)){
       return true
     }
   }
   for (var i = 0; i<6; i++){
     if ((grid[0][i]===icon && grid[1][i]==icon && grid[2][i]===icon && grid[3][i]===icon) || (grid[1][i]===icon && grid[2][i]==icon && grid[3][i]===icon && grid[4][i]===icon) || (grid[2][i]===icon && grid[3][i]==icon && grid[4][i]===icon && grid[5][i]===icon) || (grid[3][i]===icon && grid[4][i]==icon && grid[5][i]===icon && grid[6][i]===icon)){
       return true
     }
   }
   for (var col=0;col<4;col++){
      for (var row=0;row<3-col;row++){
         if (grid[col][row]===icon && grid[col+1][row+1]===icon && grid[col+2][row+2]===icon && grid[col+3][row+3]===icon && grid[col+4][row+4]===icon){
            return true
         }
      }
   }
   for (var col=7;col>3;col--){
      for (var row=0;row<3-col;row++){
         if (grid[col][row]===icon && grid[col-1][row+1]===icon && grid[col-2][row+2]===icon && grid[col-3][row+3]===icon && grid[col-4][row+4]===icon){
            return true
         }
      }
   }
     if (grid[0][0]!=="" && grid[1][0]!=="" && grid[2][0]!=="" && grid[3][0]!=="" && grid[4][0]!=="" && grid[5][0]!=="" && grid[6][0] && grid[0][1]!=="" && grid[1][1]!=="" && grid[2][1]!=="" && grid[3][1]!=="" && grid[4][1]!=="" && grid[5][1]!=="" && grid[6][1]  && grid[0][2]!=="" && grid[1][2]!=="" && grid[2][2]!=="" && grid[3][2]!=="" && grid[4][2]!=="" && grid[5][2]!=="" && grid[6][2]  &&  grid[0][3]!=="" && grid[1][3]!=="" && grid[2][3]!=="" && grid[3][3]!=="" && grid[4][3]!=="" && grid[5][3]!=="" && grid[6][3]  &&  grid[0][4]!=="" && grid[1][4]!=="" && grid[2][4]!=="" && grid[3][4]!=="" && grid[4][4]!=="" && grid[5][4]!=="" && grid[6][4]  &&  grid[0][5]!=="" && grid[1][5]!=="" && grid[2][5]!=="" && grid[3][5]!=="" && grid[4][5]!=="" && grid[5][5]!=="" && grid[6][5]){
         end("Tie")
     }
}

function end(winner){
   if (winner!=="Tie"){
       M.toast({html: `Player ${winner} wins!`})
   } 
   location.reload()

}

function display(color, index1, index2){
   if (color===P1Color){
      player="P1"
   }
   else{
      player="P2"
   }
   grid[index1-1][index2-1]=player
   d3.select(`.c${index1}r${index2}`)
         .attr("class",`c${index1}r${index2} c${index1} r${index2} ${color}`)
}

d3.select(".column1")
.on("click",()=>{
    if (findSpot(1, grid)!=="Full"){
      if (turn===1){
            display(P1Color, 1, findSpot(1, grid))
            turn=2
      }
      else if (turn===2){
            display(P2Color, 1, findSpot(1, grid))
            turn=1
      }
      if (checkWin(grid, "P1")){
            end(1)
      }
      if (checkWin(grid, "P2")){
            end(2)
      }
   }
   else{
      M.toast({html: `That column is full.`})
    }
    
})
d3.select(".column2")
.on("click",()=>{
   if (findSpot(2, grid)!=="Full"){
      if (turn===1){
            display(P1Color, 2, findSpot(2, grid))
            turn=2
      }
      else if (turn===2){
            display(P2Color, 2, findSpot(2, grid))
            turn=1
      }
      if (checkWin(grid, "P1")){
            end(1)
      }
      if (checkWin(grid, "P2")){
            end(2)
      }
   }
   else{
      M.toast({html: `That column is full.`})
    }
       
})
d3.select(".column3")
.on("click",()=>{
   if (findSpot(3, grid)!=="Full"){
      if (turn===1){
            display(P1Color, 3, findSpot(3, grid))
            turn=2
      }
      else if (turn===2){
            display(P2Color, 3, findSpot(3, grid))
            turn=1
      }
      if (checkWin(grid, "P1")){
            end(1)
      }
      if (checkWin(grid, "P2")){
            end(2)
      }
   }
   else{
      M.toast({html: `That column is full.`})
    }
    
})
d3.select(".column4")
.on("click",()=>{
   if (findSpot(4, grid)!=="Full"){
      if (turn===1){
            display(P1Color, 4, findSpot(4, grid))
            turn=2
      }
      else if (turn===2){
            display(P2Color, 4, findSpot(4, grid))
            turn=1
      }
      if (checkWin(grid, "P1")){
            end(1)
      }
      if (checkWin(grid, "P2")){
            end(2)
      }
   }
   else{
      M.toast({html: `That column is full.`})
    }
})
d3.select(".column5")
.on("click",()=>{
   if (findSpot(5, grid)!=="Full"){
      if (turn===1){
            display(P1Color, 5, findSpot(5, grid))
            turn=2
      }
      else if (turn===2){
            display(P2Color, 5, findSpot(5, grid))
            turn=1
      }
      if (checkWin(grid, "P1")){
            end(1)
      }
      if (checkWin(grid, "P2")){
            end(2)
      }
   }
   else{
      M.toast({html: `That column is full.`})
    }
})
d3.select(".column6")
.on("click",()=>{
   if (findSpot(6, grid)!=="Full"){
      if (turn===1){
            display(P1Color, 6, findSpot(6, grid))
            turn=2
      }
      else if (turn===2){
            display(P2Color, 6, findSpot(6, grid))
            turn=1
      }
      if (checkWin(grid, "P1")){
            end(1)
      }
      if (checkWin(grid, "P2")){
            end(2)
      }
   }
   else{
      M.toast({html: `That column is full.`})
    } 
})
d3.select(".column7")
.on("click",()=>{
   if (findSpot(7, grid)!=="Full"){
      if (turn===1){
            display(P1Color, 7, findSpot(7, grid))
            turn=2
      }
      else if (turn===2){
            display(P2Color, 7, findSpot(7, grid))
            turn=1
      }
      if (checkWin(grid, "P1")){
            end(1)
      }
      if (checkWin(grid, "P2")){
            end(2)
      }
   }
   else{
      M.toast({html: `That column is full.`})
    }  
})