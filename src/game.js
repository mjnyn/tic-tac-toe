class TicTacToe {
  constructor() {
    this.board = Array(9).fill(null);
    this.currentPlayer = 'X'
    this.gameActive = true;
    this.winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  }

  makeMove(index) {
    if (this.board[index] || !this.gameActive) {
      return false;
    }

    this.board[index] = this.currentPlayer;
    const result = this.checkResult();
    if (result) {
      this.gameActive = false;
    } else {
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
    return true;
  }

  checkResult() {
    for (var condition of this.winningConditions) {
      const [a, b, c] = condition;
      if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
        return { winner: this.board[a], winningCells: condition };
      }
    }

    if (this.board.every(cell => cell !== null)) {
      return { winner: null };
    }

    return null;
  }

  reset() {
    this.board = Array(9).fill(null);
    this.currentPlayer = 'X';
    this.gameActive = true;
  }

  getBoard() {
    return [...this.board];
  }

  getCurrentPlayer() {
    return this.currentPlayer;
  }

  isGameActive() {
    return this.gameActive;
  }
}

export default TicTacToe;