document.addEventListener('DOMContentLoaded', function() {
    const boardSquares = document.querySelectorAll('#board div');
    
    boardSquares.forEach(square => {
        square.classList.add('square');
    });
});