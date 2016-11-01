document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = { //start of board object
  cells : [
    {
      row : 0,
      col: 0,
      isMine: false,
      hidden:true
    },
    {
      row : 0,
      col: 1,
      isMine:false,
      hidden:true
    },
    {
      row : 0,
      col: 2,
      isMine:false,
      hidden:true
    },
    {
      row : 1,
      col: 0,
      isMine:false,
      hidden:true
    },
    {
      row : 1,
      col: 1,
      isMine:false,
      hidden:true
    },
    {
      row : 1,
      col: 2,
      isMine:true,
      hidden:true
    },
    {
      row : 2,
      col: 0,
      isMine:false,
      hidden:true
    },
    {
      row : 2,
      col: 1,
      isMine:false,
      hidden:true
    },
    {
      row : 2,
      col: 2,
      isMine:false,
      hidden:true
    },
  ]

} // end of board object

function startGame () {
  // Don't remove this function call: it makes the game work!
  for (var i = 0; i < board.cells.length;i++) { //standard 'for' loop to count through the board cells
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]); // counts through the cells checking if there are mines in them in prep for the player clicking on a cell - it will populate the cell with a number. NOT having this function will result in the cells 'working', but no nummbers will appear in them
  }
  document.addEventListener('click', checkForWin)
  document.addEventListener('contextmenu', checkForWin)


  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
   for (var i = 0; i < board.cells.length;i++) { //for loop to run through each cell in the board
     if (board.cells[i].isMine === true) { //check if it has a mine in it
          if (board.cells[i].isMarked === false) { //check if it has been marked
          return// if not marked, keep playing
          }
        }
      else if (board.cells[i].hidden === true) { //check if there are any cells that are still hidden
       return//if it has a mine in it, game over
     }
   }/*
   for (var i = 0; i < board.cells.length;i++) {
     //check for any cells where hidden is true
     if (board.cells[i].hidden === true) {
       return//ends the code running
     }

   }*/
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
     lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//var surrounding = lib.getSurroundingCells(cell.row, cell.col);
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) { //sets up the function name countSurroundingMines
  var count = 0 // starts a counter at 0
  var surroundingCells = lib.getSurroundingCells(cell.row, cell.col); //sets up a variable called surroundingCells, and populates it with the result of calling the library getSurroundingCells(on the cell rows & columns)
  for (var i = 0; i < surroundingCells.length;i++) { // standard for loop to count through the number of surroundingCells
    if (surroundingCells[i].isMine === true) { // if any of those surroundingCells has a mine in it
      count++ //increment the count by 1
    }
  }
  return count //gives the count result
}
