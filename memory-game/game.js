// Game state
let cards = [];
let flippedCards = [];
let matchedPairs = 0;
let moves = 0;
let gameStarted = false;
let timerInterval;
let startTime;

// Card symbols (using Font Awesome icons)
const symbols = [
    'fa-heart',
    'fa-star',
    'fa-moon',
    'fa-sun',
    'fa-cloud',
    'fa-bolt',
    'fa-fire',
    'fa-leaf'
];

// Initialize game
function initializeGame() {
    const gameBoard = document.getElementById('game-board');
    cards = [...symbols, ...symbols]; // Duplicate symbols for pairs
    shuffleCards();
    
    // Clear the game board
    gameBoard.innerHTML = '';
    
    // Create card elements
    cards.forEach((symbol, index) => {
        const card = document.createElement('div');
        card.className = 'card relative aspect-square cursor-pointer';
        card.innerHTML = `
            <div class="card-back absolute w-full h-full bg-white rounded-xl flex items-center justify-center shadow-lg">
                <i class="fas fa-question text-3xl text-purple-600"></i>
            </div>
            <div class="card-front absolute w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                <i class="fas ${symbol} text-3xl text-white"></i>
            </div>
        `;
        card.dataset.symbol = symbol;
        card.addEventListener('click', () => flipCard(card));
        gameBoard.appendChild(card);
    });

    // Reset game state
    matchedPairs = 0;
    moves = 0;
    gameStarted = false;
    document.getElementById('moves').textContent = moves;
    document.getElementById('timer').textContent = '00:00';
    if (timerInterval) clearInterval(timerInterval);
}

// Shuffle cards using Fisher-Yates algorithm
function shuffleCards() {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
}

// Start timer
function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
}

// Update timer display
function updateTimer() {
    const currentTime = Date.now();
    const elapsedTime = Math.floor((currentTime - startTime) / 1000);
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = elapsedTime % 60;
    document.getElementById('timer').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Flip card
function flipCard(card) {
    if (!gameStarted) {
        gameStarted = true;
        startTimer();
    }
    
    if (flippedCards.length === 2 || card.classList.contains('flipped') || 
        card.classList.contains('matched')) {
        return;
    }

    card.classList.add('flipped');
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        moves++;
        document.getElementById('moves').textContent = moves;
        checkMatch();
    }
}

// Check if flipped cards match
function checkMatch() {
    const [card1, card2] = flippedCards;
    const match = card1.dataset.symbol === card2.dataset.symbol;

    if (match) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedPairs++;
        
        if (matchedPairs === symbols.length) {
            setTimeout(showWinModal, 500);
        }
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
        }, 1000);
    }

    flippedCards = [];
}

// Show win modal
function showWinModal() {
    clearInterval(timerInterval);
    document.getElementById('final-time').textContent = document.getElementById('timer').textContent;
    document.getElementById('final-moves').textContent = moves;
    document.getElementById('win-modal').classList.remove('hidden');
}

// Restart game
function restartGame() {
    document.getElementById('win-modal').classList.add('hidden');
    initializeGame();
}

// Initialize game on load
document.addEventListener('DOMContentLoaded', () => {
    initializeGame();
    document.getElementById('restart-btn').addEventListener('click', restartGame);
});