function think(grid){
    if (opponent==="CPU Easy"){
        return([Math.floor(Math.random()*3),Math.floor(Math.random()*3)])
    }
    if (opponent==="CPU Medium"){
        copyGrid=grid
        for (var i=0; i<3; i++){
            for (var y=0; y<3; y++){
            if (copyGrid[i][y]==""){
                copyGrid[i][y]=`${P2Icon}`
                if (checkWin(copyGrid, `${P2Icon}`)){
                return([i,y])
                }
                else{
                copyGrid[i][y]=""
                }
            }
            }
        }
        copyGrid=grid
        for (var i=0; i<3; i++){
        for (var y=0; y<3; y++){
            if (copyGrid[i][y]==""){
            copyGrid[i][y]=`${P1Icon}`
            if (checkWin(copyGrid, `${P1Icon}`)){
                return([i,y])
            }
            else{
                copyGrid[i][y]=""
            }
            }
            }
        }   

        if (grid[1][1]===""){
            return([1,1])
        }
        if (grid[0][0]==""){
            return([0,0])
        }
        if (grid[0][0]==""){
            return([0,0])
        }
        if (grid[0][0]==""){
            return([0,0])
        }
        if (grid[0][0]==""){
            return([0,0])
        }
        }
    else{
        copyGrid=grid
        for (var i=0; i<3; i++){
            for (var y=0; y<3; y++){
            if (copyGrid[i][y]==""){
                copyGrid[i][y]=`${P2Icon}`
                if (checkWin(copyGrid, `${P2Icon}`)){
                return([i,y])
                }
                else{
                copyGrid[i][y]=""
                }
            }
            }
        }
        copyGrid=grid
        for (var i=0; i<3; i++){
        for (var y=0; y<3; y++){
            if (copyGrid[i][y]==""){
            copyGrid[i][y]=`${P1Icon}`
            if (checkWin(copyGrid, `${P1Icon}`)){
                return([i,y])
            }
            else{
                copyGrid[i][y]=""
            }
            }
            }
        }
        for (var i=0; i<3; i++){
            for (var y=0; y<3; y++){
                if (checkFork(grid,i,y,`${P2Icon}`)){
                return([i,y])
                }
        }
        }
        for (var i=0; i<3; i++){
            for (var i=0; i<3; i++){
                if (checkFork(grid,i,y,`${P1Icon}`)){}
                return([i,y])
                }
        }

        if (grid[1][1]===""){
            return([1,1])
        }
        if (grid[0][0]==""){
            return([0,0])
        }
        if (grid[0][0]==""){
            return([0,0])
        }
        if (grid[0][0]==""){
            return([0,0])
        }
        if (grid[0][0]==""){
            return([0,0])
        }
    }
}

function checkFork(grid,row,column, player){
  var testGrid=grid
  var winning=0
  if (testGrid[row][column]!=""){
    return false
  }
  testGrid[row][column]=player
  for (var i = 0;i<3; i++){
    for (var y=0;y<3; y++){
      if (testGrid[i][y]==""){
        testGrid[i][y]=player
        if (checkWin(testGrid, player)){
          winning+=1
        testGrid[i][y]=""
        }
    }
    }
    }
  testGrid[row][column]=""
  if (winning>1){
    return true
  }
  return false
}

function display(icon, color, index1, index2){
    grid[index1][index2]=icon
    if (index1===0 && index2===0){
        var select1 = ".one"
        var select2 = "#one"
        var numberClass = "one"
    }
    else if (index1===0 && index2===1){
        var select1 = ".two"
        var select2 = "#two"
        var numberClass = "two"
    }
    else if (index1===0 && index2===2){
        var select1 = ".three"
        var select2 = "#three"
        var numberClass = "three"
    }
    else if (index1===1 && index2===0){
        var select1 = ".four"
        var select2 = "#four"
        var numberClass = "four"
    }
    else if (index1===1 && index2===1){
        var select1 = ".five"
        var select2 = "#five"
        var numberClass = "five"
    }
    else if (index1===1 && index2===2){
        var select1 = ".six"
        var select2 = "#six"
        var numberClass = "six"
    }
    else if (index1===2 && index2===0){
        var select1 = ".seven"
        var select2 = "#seven"
        var numberClass = "seven"
    }
    else if (index1===2 && index2===1){
        var select1 = ".eight"
        var select2 = "#eight"
        var numberClass = "eight"
    }
    else{
        var select1 = ".nine"
        var select2 = "#nine"
        var numberClass = "nine"
    }
    var colorClass =  `row${(index1 + 1).toString()} col${(index2 + 1).toString()} ${color}-text ${numberClass}`

    d3.select(select1)
        .attr("class", colorClass)
    d3.select(select2)
        .text(icon)

}
 
function checkWin(grid, icon){
  for (var i = 0; i<3; i++){
    if (grid[i][0]===icon && grid[i][1]===icon && grid[i][2]===icon){
      return true
    }
  }
  for (var i = 0; i<3; i++){
    if (grid[0][i]===icon && grid[1][i]==icon && grid[2][i]===icon){
      return true
    }
  }
  if ((grid[0][0]===icon && grid[1][1]===icon && grid[2][2]===icon) || (grid[2][0]===icon && grid[1][1]===icon && grid[0][2]===icon)){
    return true
    }
    if (grid[0][0]!=="" && grid[1][0]!=="" && grid[2][0]!=="" && grid[0][1]!=="" && grid[1][1]!=="" && grid[2][1]!=="" && grid[0][2]!=="" && grid[1][2]!=="" && grid[2][2]!==""){
        end("Tie")
    }
}


function end(winner){
    if (winner!=="Tie"){
        M.toast({html: `Player ${winner} wins!`})
    } 
    location.reload()

}
d3.select(".one")
.on("click",()=>{
    if (grid[0][0]===""){
        if (opponent==="Multiplayer"){
            if (turn===1){
                display(P1Icon, P1Color, 0, 0)
                turn=2
            }
            else if (turn===2){
                display(P2Icon, P2Color, 0, 0)
                turn=1
            }
            if (checkWin(grid, P1Icon)){
                end(1)
            }
            if (checkWin(grid, P2Icon)){
                end(2)
            }
        }
        else{
            display(P1Icon, P1Color, 0, 0)
            if (checkWin(grid, P1Icon)){
                end(1)
            }
            else{
                thinkList=think(grid)
                display(P2Icon, P2Color, thinkList[0],thinkList[1]) 
                if (checkWin(grid, P2Icon)){
                    end(2)
                }
            }
        }
    }
    else{
        M.toast({html: `That spot's taken.`})
    }
    
})
d3.select(".two")
.on("click",()=>{
    if (grid[0][1]===""){
        if (opponent==="Multiplayer"){
            if (turn===1){
                display(P1Icon, P1Color, 0, 1)
                turn=2
            }
            else if (turn===2){
                display(P2Icon, P2Color, 0, 1)
                turn=1
            }
            if (checkWin(grid, P1Icon)){
                end(1)
            }
            if (checkWin(grid, P2Icon)){
                end(2)
            }
        }
        else{
            display(P1Icon, P1Color, 0, 1)
            if (checkWin(grid, P1Icon)){
                end(1)
            }
            else{
                thinkList=think(grid)
                display(P2Icon, P2Color, thinkList[0],thinkList[1]) 
                if (checkWin(grid, P2Icon)){
                    end(2)
                }
            }
        }
    }
    else{
        M.toast({html: `That spot's taken.`})
    }
       
})
d3.select(".three")
.on("click",()=>{
    if (grid[0][2]===""){
        if (opponent==="Multiplayer"){
            if (turn===1){
                display(P1Icon, P1Color, 0, 2)
                turn=2
            }
            else if (turn===2){
                display(P2Icon, P2Color, 0, 2)
                turn=1
            }
            if (checkWin(grid, P1Icon)){
                end(1)
            }
            if (checkWin(grid, P2Icon)){
                end(2)
            }
        }
        else{
            display(P1Icon, P1Color, 0, 2)
            if (checkWin(grid, P1Icon)){
                end(1)
            }
            else{
                thinkList=think(grid)
                display(P2Icon, P2Color, thinkList[0],thinkList[1]) 
                if (checkWin(grid, P2Icon)){
                    end(2)
                }
            }
        }
    }
    else{
        M.toast({html: `That spot's taken.`})
    }
    
})
d3.select(".four")
.on("click",()=>{
    if (grid[1][0]===""){
        if (opponent==="Multiplayer"){
            if (turn===1){
                display(P1Icon, P1Color, 1, 0)
                turn=2
            }
            else if (turn===2){
                display(P2Icon, P2Color, 1, 0)
                turn=1
            }
            if (checkWin(grid, P1Icon)){
                end(1)
            }
            if (checkWin(grid, P2Icon)){
                end(2)
            }
        }
        else{
            display(P1Icon, P1Color, 1, 0)
            thinkList=think(grid)
            display(P2Icon, P2Color, thinkList[0],thinkList[1]) 
        }
    }
    else{
        M.toast({html: `That spot's taken.`})
    }
     
})
d3.select(".five")
.on("click",()=>{
    if (grid[1][1]===""){
        if (opponent==="Multiplayer"){
            if (turn===1){
                display(P1Icon, P1Color, 1, 1)
                turn=2
            }
            else if (turn===2){
                display(P2Icon, P2Color, 1, 1)
                turn=1
            }
            if (checkWin(grid, P1Icon)){
                end(1)
            }
            if (checkWin(grid, P2Icon)){
                end(2)
            }
        }
        else{
            display(P1Icon, P1Color, 1, 1)
            if (checkWin(grid, P1Icon)){
                end(1)
            }
            else{
                thinkList=think(grid)
                display(P2Icon, P2Color, thinkList[0],thinkList[1]) 
                if (checkWin(grid, P2Icon)){
                    end(2)
                }
            }
        }
    }
    else{
        M.toast({html: `That spot's taken.`})
    }
      
})
d3.select(".six")
.on("click",()=>{
    if (grid[1][2]===""){
        if (opponent==="Multiplayer"){
            if (turn===1){
                display(P1Icon, P1Color, 1, 2)
                turn=2
            }
            else if (turn===2){
                display(P2Icon, P2Color, 1, 2)
                turn=1
            }
            if (checkWin(grid, P1Icon)){
                end(1)
            }
            if (checkWin(grid, P2Icon)){
                end(2)
            }
        }
        else{
            display(P1Icon, P1Color, 1, 2)
            if (checkWin(grid, P1Icon)){
                end(1)
            }
            else{
                thinkList=think(grid)
                display(P2Icon, P2Color, thinkList[0],thinkList[1]) 
                if (checkWin(grid, P2Icon)){
                    end(2)
                }
            }
        }
    }
    else{
        M.toast({html: `That spot's taken.`})
    }  
})
d3.select(".seven")
.on("click",()=>{
    if (grid[2][0]===""){
        if (opponent==="Multiplayer"){
            if (turn===1){
                display(P1Icon, P1Color, 2, 0)
                turn=2
            }
            else if (turn===2){
                display(P2Icon, P2Color, 2, 0)
                turn=1
            }
            if (checkWin(grid, P1Icon)){
                end(1)
            }
            if (checkWin(grid, P2Icon)){
                end(2)
            }
        }
        else{
            display(P1Icon, P1Color, 2, 0)
            if (checkWin(grid, P1Icon)){
                end(1)
            }
            else{
                thinkList=think(grid)
                display(P2Icon, P2Color, thinkList[0],thinkList[1]) 
                if (checkWin(grid, P2Icon)){
                    end(2)
                }
            }
        }
    }
    else{
        M.toast({html: `That spot's taken.`})
    }   
})
d3.select(".eight")
.on("click",()=>{
    if (grid[2][1]===""){
        if (opponent==="Multiplayer"){
            if (turn===1){
                display(P1Icon, P1Color, 2, 1)
                turn=2
            }
            else if (turn===2){
                display(P2Icon, P2Color, 2, 1)
                turn=1
            }
            if (checkWin(grid, P1Icon)){
                end(1)
            }
            if (checkWin(grid, P2Icon)){
                end(2)
            }
        }
        else{
            display(P1Icon, P1Color, 2, 1)
            if (checkWin(grid, P1Icon)){
                end(1)
            }
            else{
                thinkList=think(grid)
                display(P2Icon, P2Color, thinkList[0],thinkList[1]) 
                if (checkWin(grid, P2Icon)){
                    end(2)
                }
            }
        }
    }
    else{
        M.toast({html: `That spot's taken.`})
    }
})
d3.select(".nine")
.on("click",()=>{   
    if (grid[2][2]===""){
        if (opponent==="Multiplayer"){
            if (turn===1){
                display(P1Icon, P1Color, 2, 2)
                turn=2
            }
            else if (turn===2){
                display(P2Icon, P2Color, 2, 2)
                turn=1
            }
            if (checkWin(grid, P1Icon)){
                end(1)
            }
            if (checkWin(grid, P2Icon)){
                end(2)
            }
        }
        else{
            display(P1Icon, P1Color, 2, 2)
            if (checkWin(grid, P1Icon)){
                end(1)
            }
            else{
                thinkList=think(grid)
                display(P2Icon, P2Color, thinkList[0],thinkList[1]) 
                if (checkWin(grid, P2Icon)){
                    end(2)
                }
            }
        }
    }
    else{
        M.toast({html: `That spot's taken.`})
    }
    
})
