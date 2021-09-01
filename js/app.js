/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


let newGame = new Game();
const startButton = document.getElementById('btn__reset');
startButton.addEventListener('click', () => { 
    newGame = new Game();
    newGame.startGame();
});


/**
 * Listens for screen keyboard input
 */
for (key of document.getElementById('qwerty').querySelectorAll('.key')) {
    key.addEventListener('click', (e) => {
        newGame.handleInteraction(e.target);
    })
}

/**
 * Listens for physical keyboard input when phrase display is up
 */
    document.addEventListener('keydown', (e) => { 
        if (document.getElementById('overlay').style.display === 'none') {
            for (const screenKey of document.getElementById('qwerty').querySelectorAll('.key')) {
                if (screenKey.innerText.includes(e.key)) {
                    newGame.handleInteraction(screenKey);
                }
           }   }
    })
