const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const gameContainer = document.getElementById('game-container');

canvas.width = 300;
canvas.height = 600;
gameContainer.appendChild(canvas);

const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30;

// Tetris shapes (tetrominoes)
const SHAPES = [
    [[1, 1, 1, 1]], // I
    [[1, 1], [1, 1]], // O
    [[0, 1, 0], [1, 1, 1]], // T
    [[1, 1, 0], [0, 1, 1]], // S
    [[0, 1, 1], [1, 1, 0]], // Z
    [[1, 0, 0], [1, 1, 1]], // L
    [[0, 0, 1], [1, 1, 1]]  // J
];

const COLORS = [
    '#00f0f0', // cyan (I)
    '#f0f000', // yellow (O)
    '#a000f0', // purple (T)
    '#00f000', // green (S)
    '#f00000', // red (Z)
    '#f0a000', // orange (L)
    '#0000f0'  // blue (J)
];

// Game board
let board = Array(ROWS).fill().map(() => Array(COLS).fill(0));

// Current piece
let currentPiece = {
    shape: null,
    color: null,
    x: 0,
    y: 0
};

let gameOver = false;
let score = 0;
let dropCounter = 0;
let dropInterval = 1000;
let lastTime = 0;

// Initialize new piece
function newPiece() {
    const shapeIndex = Math.floor(Math.random() * SHAPES.length);
    currentPiece = {
        shape: SHAPES[shapeIndex],
        color: COLORS[shapeIndex],
        x: Math.floor(COLS / 2) - Math.floor(SHAPES[shapeIndex][0].length / 2),
        y: 0
    };
    
    if (collision()) {
        gameOver = true;
        alert('Game Over! Score: ' + score);
        resetGame();
    }
}

// Check collision
function collision() {
    for (let y = 0; y < currentPiece.shape.length; y++) {
        for (let x = 0; x < currentPiece.shape[y].length; x++) {
            if (currentPiece.shape[y][x]) {
                const newX = currentPiece.x + x;
                const newY = currentPiece.y + y;
                
                if (newX < 0 || newX >= COLS || newY >= ROWS) {
                    return true;
                }
                
                if (newY >= 0 && board[newY][newX]) {
                    return true;
                }
            }
        }
    }
    return false;
}

// Merge piece to board
function merge() {
    for (let y = 0; y < currentPiece.shape.length; y++) {
        for (let x = 0; x < currentPiece.shape[y].length; x++) {
            if (currentPiece.shape[y][x]) {
                const boardY = currentPiece.y + y;
                const boardX = currentPiece.x + x;
                if (boardY >= 0) {
                    board[boardY][boardX] = currentPiece.color;
                }
            }
        }
    }
}

// Rotate piece
function rotate() {
    const rotated = currentPiece.shape[0].map((_, i) =>
        currentPiece.shape.map(row => row[i]).reverse()
    );
    
    const previousShape = currentPiece.shape;
    currentPiece.shape = rotated;
    
    if (collision()) {
        currentPiece.shape = previousShape;
    }
}

// Move piece
function move(dir) {
    currentPiece.x += dir;
    if (collision()) {
        currentPiece.x -= dir;
    }
}

// Drop piece
function drop() {
    currentPiece.y++;
    if (collision()) {
        currentPiece.y--;
        merge();
        clearLines();
        newPiece();
    }
    dropCounter = 0;
}

// Clear completed lines
function clearLines() {
    let linesCleared = 0;
    
    for (let y = ROWS - 1; y >= 0; y--) {
        if (board[y].every(cell => cell !== 0)) {
            board.splice(y, 1);
            board.unshift(Array(COLS).fill(0));
            linesCleared++;
            y++; // Check the same row again
        }
    }
    
    if (linesCleared > 0) {
        score += linesCleared * 100;
    }
}

// Draw functions
function drawBlock(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
    ctx.strokeStyle = '#000';
    ctx.strokeRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
}

function drawBoard() {
    for (let y = 0; y < ROWS; y++) {
        for (let x = 0; x < COLS; x++) {
            if (board[y][x]) {
                drawBlock(x, y, board[y][x]);
            }
        }
    }
}

function drawPiece() {
    for (let y = 0; y < currentPiece.shape.length; y++) {
        for (let x = 0; x < currentPiece.shape[y].length; x++) {
            if (currentPiece.shape[y][x]) {
                drawBlock(currentPiece.x + x, currentPiece.y + y, currentPiece.color);
            }
        }
    }
}

function draw() {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    drawBoard();
    drawPiece();
    
    // Draw score
    ctx.fillStyle = '#fff';
    ctx.font = '20px Arial';
    ctx.fillText('Score: ' + score, 10, 25);
}

// Game loop
function update(time = 0) {
    if (gameOver) return;
    
    const deltaTime = time - lastTime;
    lastTime = time;
    dropCounter += deltaTime;
    
    if (dropCounter > dropInterval) {
        drop();
    }
    
    draw();
    requestAnimationFrame(update);
}

// Keyboard controls
document.addEventListener('keydown', (e) => {
    if (gameOver) return;
    
    switch(e.key) {
        case 'ArrowLeft':
            move(-1);
            break;
        case 'ArrowRight':
            move(1);
            break;
        case 'ArrowDown':
            drop();
            break;
        case 'ArrowUp':
        case ' ':
            rotate();
            break;
    }
    draw();
});

// Reset game
function resetGame() {
    board = Array(ROWS).fill().map(() => Array(COLS).fill(0));
    score = 0;
    gameOver = false;
    dropCounter = 0;
    newPiece();
    update();
}

// Start game
newPiece();
update();