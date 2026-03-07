import { describe, it, expect, beforeEach } from 'vitest';
import TicTacToe from '../../src/game.js';

describe('TicTacToe Game', () => {
  let game;

  beforeEach(() => {
    game = new TicTacToe();
  });

  describe('Initial State', () => {
    it('should initialize with an empty board', () => {
      expect(game.getBoard()).toEqual([null, null, null, null, null, null, null, null, null]);
    });

    it('should start with player X', () => {
      expect(game.getCurrentPlayer()).toBe('X');
    });

    it('should start with game active', () => {
      expect(game.isGameActive()).toBe(true);
    });
  });

  describe('Making Moves', () => {
    it('should place X on the board', () => {
      game.makeMove(0);
      expect(game.getBoard()[0]).toBe('X');
    });

    it('should place O after X', () => {
      game.makeMove(0);
      game.makeMove(1);
      expect(game.getBoard()[1]).toBe('O');
    });

    it('should not allow moves on occupied cells', () => {
      game.makeMove(0);
      const result = game.makeMove(0);
      expect(result).toBe(false);
      expect(game.getBoard()[0]).toBe('X');
    });

    it('should not allow moves when game is not active', () => {
      game.makeMove(0);
      game.makeMove(1);
      game.makeMove(2);
      game.makeMove(3);
      game.makeMove(4);
      game.makeMove(5);
      game.makeMove(6);
      game.makeMove(7);
      game.makeMove(8);
      const result = game.makeMove(0);
      expect(result).toBe(false);
    });
  });

  describe('Winning Conditions', () => {
    it('should detect a win in the first row', () => {
      game.makeMove(0);
      game.makeMove(3);
      game.makeMove(1);
      game.makeMove(4);
      game.makeMove(2);
      const result = game.checkResult();
      expect(result).toEqual({ winner: 'X', winningCells: [0, 1, 2] });
    });

    it('should detect a win in the second row', () => {
      game.makeMove(3);
      game.makeMove(0);
      game.makeMove(4);
      game.makeMove(1);
      game.makeMove(5);
      const result = game.checkResult();
      expect(result).toEqual({ winner: 'X', winningCells: [3, 4, 5] });
    });

    it('should detect a win in the third row', () => {
      game.makeMove(6);
      game.makeMove(0);
      game.makeMove(7);
      game.makeMove(1);
      game.makeMove(8);
      const result = game.checkResult();
      expect(result).toEqual({ winner: 'X', winningCells: [6, 7, 8] });
    });

    it('should detect a win in the first column', () => {
      game.makeMove(0);
      game.makeMove(1);
      game.makeMove(3);
      game.makeMove(2);
      game.makeMove(6);
      const result = game.checkResult();
      expect(result).toEqual({ winner: 'X', winningCells: [0, 3, 6] });
    });

    it('should detect a win in the second column', () => {
      game.makeMove(1);
      game.makeMove(0);
      game.makeMove(4);
      game.makeMove(2);
      game.makeMove(7);
      const result = game.checkResult();
      expect(result).toEqual({ winner: 'X', winningCells: [1, 4, 7] });
    });

    it('should detect a win in the third column', () => {
      game.makeMove(2);
      game.makeMove(0);
      game.makeMove(5);
      game.makeMove(1);
      game.makeMove(8);
      const result = game.checkResult();
      expect(result).toEqual({ winner: 'X', winningCells: [2, 5, 8] });
    });

    it('should detect a win in the main diagonal', () => {
      game.makeMove(0);
      game.makeMove(1);
      game.makeMove(4);
      game.makeMove(2);
      game.makeMove(8);
      const result = game.checkResult();
      expect(result).toEqual({ winner: 'X', winningCells: [0, 4, 8] });
    });

    it('should detect a win in the anti-diagonal', () => {
      game.makeMove(2);
      game.makeMove(0);
      game.makeMove(4);
      game.makeMove(1);
      game.makeMove(6);
      const result = game.checkResult();
      expect(result).toEqual({ winner: 'X', winningCells: [2, 4, 6] });
    });
  });

  describe('Tie Game', () => {
    it('should detect a tie game', () => {
      game.makeMove(0);
      game.makeMove(8);
      game.makeMove(2);
      game.makeMove(6);
      game.makeMove(4);
      game.makeMove(1);
      game.makeMove(3);
      game.makeMove(5);
      game.makeMove(7);

      const result = game.checkResult();
      expect(result).toEqual({ winner: null });
    });
  });

  describe('Reset Game', () => {
    it('should reset the game to initial state', () => {
      game.makeMove(0);
      game.makeMove(1);
      game.reset();
      expect(game.getBoard()).toEqual([null, null, null, null, null, null, null, null, null]);
      expect(game.getCurrentPlayer()).toBe('X');
      expect(game.isGameActive()).toBe(true);
    });
  });
});