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

window.recurse = function(row, n, inputBoard, validator, callback){
    // console.log(JSON.stringify(inputBoard.rows()), row);

    // debugger;
  if (row === n){
    return callback();
  }

  for (var i = 0; i < n; i++){
    inputBoard.togglePiece(row, i);
    if (!inputBoard[validator]()){
      var result = recurse(row+1, n, inputBoard, validator, callback);
      if (result){
        return result;
      }
    }
    inputBoard.togglePiece(row, i);
  }
}

window.findNRooksSolution = function(n) {
  var board = new Board({n: n});

  return recurse(0, n, board, "hasAnyRooksConflicts", function(){
    return board.duplicate();
  });
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var board = new Board({n: n});
  var counter = 0;

  recurse(0, n, board, "hasAnyRooksConflicts", function(){
    counter++;
  });
  return counter;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n: n});

  return recurse(0, n, board, "hasAnyQueensConflicts", function(){
    return board.duplicate();
  }) || new Board({n: n}).rows();
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var board = new Board({n: n});
  var counter = 0;

  recurse(0, n, board, "hasAnyQueensConflicts", function(){
    counter++;
  });
  return counter;
};
