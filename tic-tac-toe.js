document.addEventListener('DOMContentLoaded', function() {
    const boardSquares = document.querySelectorAll('#board div');
    boardSquares.forEach(square => {
        square.classList.add('square');
    });

    
    let currentPlayer = 'X';
    let gameState = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;

    boardSquares.forEach((square, index) => {
        square.addEventListener('click', function() {
            
            if (gameState[index] === '' && gameActive) {
                gameState[index] = currentPlayer;
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                // Switches between X n O
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                updateStatusMessage();
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

    function updateStatusMessage() {
        const status = document.getElementById('status');
        status.textContent = `Current player: ${currentPlayer}`;
    }

    updateStatusMessage();
});