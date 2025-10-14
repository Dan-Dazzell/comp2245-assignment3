// Use window.onload instead of DOMContentLoaded to ensure everything is ready
window.onload = function() {
    console.log('Page fully loaded - script running');
    
    // Add square classes to board divs
    const boardSquares = document.querySelectorAll('#board div');
    console.log('Found', boardSquares.length, 'squares');
    
    boardSquares.forEach((square, index) => {
        square.classList.add('square');
        console.log('Added square class to div', index);
    });
    
    // Make New Game button open YouTube video
    const newGameBtn = document.querySelector('.btn');
    console.log('Button found:', newGameBtn);
    
    newGameBtn.addEventListener('click', function() {
        console.log('Button clicked! Opening YouTube...');
        window.open('https://www.youtube.com/watch?v=r8uBiiig7tI', '_blank');
    });
    
    console.log('Setup complete');
};