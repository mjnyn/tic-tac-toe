import { test, expect } from '@playwright/test';

test.describe('Tic Tac Toe E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the game title', async ({ page }) => {
    await expect(page.locator('h1')).toHaveText('Tic Tac Toe');
  });

  test('should start with player X', async ({ page }) => {
    await expect(page.locator('#current-player')).toHaveText('Current Player: X');
  });

  test('should allow clicking on cells to place X', async ({ page }) => {
    await page.click('.cell:nth-child(1)');
    await expect(page.locator('.cell:nth-child(1)')).toContainText('X');
  });

  test('should alternate between X and O', async ({ page }) => {
    await page.click('.cell');
    await page.click('.cell:nth-child(2)');
    await expect(page.locator('.cell:nth-child(2)')).toContainText('O');
  });

  test('should detect a win in the first row', async ({ page }) => {
    await page.click('.cell:nth-child(1)');
    await page.click('.cell:nth-child(4)');
    await page.click('.cell:nth-child(2)');
    await page.click('.cell:nth-child(5)');
    await page.click('.cell:nth-child(3)');
    await expect(page.locator('#game-status')).toContainText('Player X wins!');
  });

  test('should detect a win in the first column', async ({ page }) => {
    await page.click('.cell:nth-child(1)');
    await page.click('.cell:nth-child(2)');
    await page.click('.cell:nth-child(4)');
    await page.click('.cell:nth-child(3)');
    await page.click('.cell:nth-child(7)');
    await expect(page.locator('#game-status')).toContainText('Player X wins!');
  });

  test('should detect a win in the main diagonal', async ({ page }) => {
    await page.click('.cell:nth-child(1)');
    await page.click('.cell:nth-child(2)');
    await page.click('.cell:nth-child(5)');
    await page.click('.cell:nth-child(3)');
    await page.click('.cell:nth-child(9)');
    await expect(page.locator('#game-status')).toContainText('Player X wins!');
  });

  test('should detect a tie game', async ({ page }) => {
    await page.click('.cell:nth-child(1)');
    await page.click('.cell:nth-child(9)');
    await page.click('.cell:nth-child(3)');
    await page.click('.cell:nth-child(7)');
    await page.click('.cell:nth-child(5)');
    await page.click('.cell:nth-child(2)');
    await page.click('.cell:nth-child(4)');
    await page.click('.cell:nth-child(6)');
    await page.click('.cell:nth-child(8)');
    await expect(page.locator('#game-status')).toContainText('Game ended in a tie!');
  });

  test('should reset the game', async ({ page }) => {
    await page.click('.cell:nth-child(1)');
    await page.click('#reset-btn');
    await expect(page.locator('#current-player')).toHaveText('Current Player: X');
    await expect(page.locator('#game-status')).toHaveText('');
    await expect(page.locator('.cell:nth-child(1)')).not.toContainText('X');
  });

  test('should be responsive on mobile devices', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator('.container')).toBeVisible();
    await expect(page.locator('.cell')).toHaveCount(9);
  });
});