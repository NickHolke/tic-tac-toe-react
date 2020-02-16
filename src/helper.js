const isWon = (board) => {
  let combos = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

  for (let i = 0; i < combos.length; i++) {
    const [a,b,c] = combos[i];
    if (board[a] !== '' && board[a] === board[b] && board[b] === board[c]) {
      console.log('game won');
      return board[a];
    }
  }

  if (!board.includes('')) {
    return 'tie';
  }

  return false;
}

const minimax = (board, isMaximizing) => {
  //debugger;
  let scores = {
    X: 1,
    O: -1,
    tie: 0,
  }
  let winner = isWon(board);
  
  if (winner) {
    return scores[winner];
  }

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === '') {
        board[i] = 'X';
        let score = minimax(board, false);
        board[i] = '';
        bestScore = Math.max(bestScore, score);
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === '') {
        board[i] = 'O';
        let score = minimax(board, true);
        board[i] = '';
        bestScore = Math.min(bestScore, score);
      }
    }
    return bestScore;
  }
}

export {
  isWon,
  minimax,
}
