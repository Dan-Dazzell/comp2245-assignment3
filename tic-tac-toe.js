document.addEventListener('DOMContentLoaded', function() {
    const boardSquares = document.querySelectorAll('#board div');
    boardSquares.forEach(square => {
        square.classList.add('square');
    });

    
    let currentPlayer = 'X';
    let gameState = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;

    // All the possible winning combinations
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
    ];

    boardSquares.forEach((square, index) => {
        square.addEventListener('click', function() {
            
            if (gameState[index] === '' && gameActive) {
                gameState[index] = currentPlayer;
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                
                // Check if someone won after this move
                checkWinner();
                
                // Only switch players if game is still going
                if (gameActive) {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                    updateStatusMessage();
                }
            }
        });


        square.addEventListener('mouseover', function() {
            if (gameState[index] === '' && gameActive) {
                square.classList.add('hover');
                // Preview part
                if (!square.textContent) {
                    square.textContent = currentPlayer;
                    square.classList.add(currentPlayer);
                }
            }
        });

        square.addEventListener('mouseout', function() {
            square.classList.remove('hover');
            // Remove the preview if nobody actually played here
            if (gameState[index] === '') {
                square.textContent = '';
                square.classList.remove('X', 'O');
            }
        });
    });

    // New Game button functionality
    const newGameBtn = document.querySelector('.btn');
    newGameBtn.addEventListener('click', function() {
        resetGame();
    });

    function resetGame() {
        // Clear the board visually
        boardSquares.forEach(square => {
            square.textContent = '';
            square.classList.remove('X', 'O');
        });
        
        // Reset game state
        gameState = ['', '', '', '', '', '', '', '', ''];
        currentPlayer = 'X';
        gameActive = true;
        
        // Reset status message
        const status = document.getElementById('status');
        status.textContent = 'Move your mouse over a square and click to play an X or an O.';
        status.classList.remove('you-won');
    }

    function checkWinner() {
        let roundWon = false;
        let winningPlayer = '';

        // Check each winning combo to see if anyone has 3 in a row
        for (let i = 0; i < winningCombos.length; i++) {
            const [a, b, c] = winningCombos[i];
            
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                roundWon = true;
                winningPlayer = gameState[a];
                break;
            }
        }

        if (roundWon) {
            gameActive = false;
            const status = document.getElementById('status');
            status.textContent = `Congratulations! ${winningPlayer} is the Winner! 🎉`;
            status.classList.add('you-won');
        }
    }

    function updateStatusMessage() {
        const status = document.getElementById('status');
        status.textContent = `Current player: ${currentPlayer}`;
        status.classList.remove('you-won');
    }

    updateStatusMessage();
});