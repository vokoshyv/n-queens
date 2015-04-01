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
  // var board = new Board({n : n});
  // var solution = board.rows();

  // for (var i = 0; i < solution.length; i++){
  //   solution[i][i] = 1;
  // }

  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  // return solution;

  var board = new Board({n: n})
  var matrix = board.rows();
  var outcomes = [];
  var round = 0;

  var recurse = function(){
    //base case
    //check if rounds === n?
    //if so, push matrix to outcomes
    //

    //recursion
    //
    //define the row based on the round
    //iterate through the row (element)
      // change element = 1
      // test matrix against helper functions for conflict
      // if conflict
        // reset previous element value
        // continue
      // if not a conflict
        // increment the round
        // recursively call 'recurse'
    //iterate through matrix (with each?); collection is matrix; value is row
    //
    board
  }

  recurse(matrix);

  return outcomes[0];
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  // var count = 1;
  // for (var i = 1; i < n+1; i++){
  //   count *= i;
  // }
  // return count;
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
