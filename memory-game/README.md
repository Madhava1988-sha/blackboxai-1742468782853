# Memory Match Game

A fun and interactive memory card matching game built with HTML, JavaScript, and Tailwind CSS.

## Features
- 16 cards with 8 matching pairs
- Move counter
- Timer
- Responsive design
- Beautiful animations
- Modern UI with gradient backgrounds

## Setup Instructions for XAMPP

1. Install XAMPP if you haven't already (download from https://www.apachefriends.org/)

2. Copy the Game Files:
   - Navigate to your XAMPP installation directory
   - Find the `htdocs` folder (typically `C:\xampp\htdocs` on Windows or `/opt/lampp/htdocs` on Linux)
   - Create a new folder called `memory-game`
   - Copy all the game files (index.html and game.js) into this folder

3. Start XAMPP:
   - Launch XAMPP Control Panel
   - Start the Apache service by clicking the "Start" button next to Apache

4. Play the Game:
   - Open your web browser
   - Visit `http://localhost/memory-game`
   - The game should load and be ready to play!

## How to Play

1. Click on any card to reveal its symbol
2. Click on another card to find its match
3. If the cards match, they'll stay face up
4. If they don't match, they'll flip back face down
5. Continue until all pairs are matched
6. Try to complete the game in the fewest moves possible!

## Game Controls

- Click cards to flip them
- Use the "Restart Game" button to start a new game at any time
- Watch your moves and time in the counters at the top

## Technical Details

- Built with vanilla JavaScript
- Styled with Tailwind CSS
- Responsive design works on all devices
- Uses Font Awesome icons for card symbols
- Smooth flip animations using CSS transforms