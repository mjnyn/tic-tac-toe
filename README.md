# Tic Tac Toe Game

A simple, responsive Tic Tac Toe game built with HTML, CSS, and vanilla JavaScript. Includes unit tests with Vitest and end-to-end tests with Playwright, along with CI/CD pipeline using GitHub Actions.

## Features

- Clean, responsive design that works on desktop and mobile devices
- Full game functionality with X and O players
- Win detection for all possible winning combinations
- Tie game detection
- Reset functionality to start new games
- Comprehensive test coverage
- Docker containerization for easy deployment

## Requirements

- Docker and Docker Compose
- Node.js v20.14.0 (specified in .nvmrc)

## Getting Started

### Using Docker (Recommended)

1. Clone the repository:
   ```bash
   git clone git@github.com:mjnyn/tic-tac-toe.git
   cd tic-tac-toe
   ```

2. Build and start the application:
   ```bash
   docker compose up --build
   ```
   This will build the Docker image and start the application on port 3000.

3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### Alternative: Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```
   This will open the game in your browser.

## Running Tests

### Unit Tests (Vitest)
```bash
docker compose run tic-tac-toe npm test
```

### End-to-End Tests (Playwright)
```bash
docker compose run tic-tac-toe npm run test:e2e
```

### All Tests (for CI/CD)
```bash
docker compose run tic-tac-toe npm test && npm run test:e2e
```


## How to Play

1. Open the game in your browser
2. Click on any empty cell to place your mark (X or O)
3. Players alternate turns automatically
4. The first player to get three marks in a row (horizontally, vertically, or diagonally) wins
5. If all cells are filled without a winner, the game ends in a tie
6. Click "Reset Game" to start a new game

## GitHub Actions CI/CD

The project includes a complete CI/CD pipeline that:
- Runs unit tests on every push and pull request
- Runs end-to-end tests in headless mode
- Deploys to GitHub Pages only when all tests pass on the main branch

## Technologies Used

- HTML5
- CSS3 (with Grid and Flexbox)
- Vanilla JavaScript (ES6+)
- Vitest (unit testing)
- Playwright (end-to-end testing)
- GitHub Actions (CI/CD)
- Docker (containerization)
- Node.js v20.14.0
