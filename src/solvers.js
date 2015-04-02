/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var board = new Board({n: n})
  var round = 0;
  var check = true;
  result = [];

  var recurse = function(inputBoard){
    if (round === n){
      result.push(inputBoard.duplicate());
      check = false;
      return;
    }
    for (var i = 0; i < n; i++){
      inputBoard.togglePiece(round, i);
      round++;
      if (check && !inputBoard.hasAnyRooksConflicts()){
        recurse(inputBoard);
      }
      round--;
      inputBoard.clearRow(round);
    }
  }
  recurse(board);
  return result[0];
};




// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var total = 1;
  var current = n;
  while (current > 0){
    total *= current;
    current -= 1;
  }
  return total;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
