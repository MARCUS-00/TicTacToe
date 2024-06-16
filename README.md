# Tic-Tac-Toe Multiplayer Game

## Introduction

This is a real-time multiplayer Tic-Tac-Toe game built using Node.js, Express, and Socket.IO. Players can connect to the game, enter their names, and compete against each other. The game board updates in real-time as players make their moves, and it announces the winner or a draw when the game ends.

## Features

- **Real-time Gameplay:** Play Tic-Tac-Toe with another player in real-time.
- **Dynamic Updates:** Game board updates dynamically as players make moves.
- **Player Interaction:** Players can see their opponent's name and their assigned symbol (X or O).
- **Win and Draw Detection:** Automatically detects when a player wins or when the game ends in a draw.
- **Responsive Design:** Designed to work well on desktop and mobile browsers.

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express
- **Real-time Communication:** Socket.IO

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/MARCUS-OO/TicTacToe.git
   cd TicTacToe
   ```

2. **Install dependencies:**

   ```bash
   npm i
   ```

3. **Start the server:**

   ```bash
   node server.js
   ```

4. **Open your browser and navigate to** `http://localhost:3000` **to view the game.**

## How to Play

1. **Enter Your Name:**
   - When the game loads, enter your name in the provided input field.
   - Click the "Search for a player" button to find an opponent.

2. **Gameplay:**
   - The game assigns you a symbol (X or O) and displays your opponent's name.
   - Click any empty cell on the Tic-Tac-Toe grid to make your move.
   - Turns alternate between X and O.
   - The first player to align three symbols in a row, column, or diagonal wins.
   - If all cells are filled without a winner, the game ends in a draw.

3. **End of Game:**
   - A message displays who won or if it's a draw.
   - Refresh the browser to start a new game
