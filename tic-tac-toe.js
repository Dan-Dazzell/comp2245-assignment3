document.addEventListener('DOMContentLoaded', function() {
    // Get all the div elements inside the board and add square class
    const boardSquares = document.querySelectorAll('#board div');
    boardSquares.forEach(square => {
        square.classList.add('square');
    });

    // Game state variables
    let currentPlayer = 'X'; // X goes first
    let gameState = ['', '', '', '', '', '', '', '', '']; // Empty array to track moves
    let gameActive = true;

    // Add click event listeners to all squares
    boardSquares.forEach((square, index) => {
        square.addEventListener('click', function() {
            // Only proceed if square is empty and game is active
            if (gameState[index] === '' && gameActive) {
                // Update game state
                gameState[index] = currentPlayer;
                
                // Update visual display
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                
                // Switch to the other player
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                
                // Optional: Update status message
                updateStatusMessage();
            }
        });
    });

    function updateStatusMessage() {
        const status = document.getElementById('status');
        status.textContent = `Current player: ${currentPlayer}`;
    }

    // Initialize status message
    updateStatusMessage();
});