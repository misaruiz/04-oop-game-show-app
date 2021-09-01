/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [ 
            new Phrase('Fear is the path to the dark side'),
            new Phrase('Powerful you have become'),
            new Phrase('Your path you must decide'),
            new Phrase('Do or do not'),
            new Phrase('There is no try')];
        this.activePhrase = null;
    }

    /**
     * STARS GAME: 
     * Hides start screen overlay
     * Gets random phrase
     * Displays phrase on screen
     */
     startGame() {
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
     }

     /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
     getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
     }

    /**
    * Checks to see if the button clicked by the player matches a letter in the phrase, 
    * and then directs the game based on a correct or incorrect guess.
    */
    handleInteraction(letterPress) {
        
        const activePhraseArray = this.activePhrase.phraseArray;

        if (!activePhraseArray.includes(letterPress.innerText)) {
            letterPress.classList.add('wrong');
                this.removeLife();
        } else {
            letterPress.classList.add('chosen');
                this.activePhrase.showMatchedLetter(letterPress.innerText);
                if (this.checkForWin() === true) {
                    this.gameOver();
                    Array.from(document.getElementsByClassName('key')).map(element => {
                        element.classList.remove("wrong"); 
                        element.classList.remove("chosen");
                    }
                    )
                }
        }
    }     

    /**
    * Removes a life from the scoreboard
    */
    removeLife() {
        document.querySelectorAll('.tries img')[this.missed].src = 'images/lostHeart.png';
        this.missed++;
        if (this.missed >= 5) { this.gameOver() }
    }

    /**
     * Checks to see if the player has revealed all of the letters in the active phrase
     * @returns {Boolean} True if player has won
     */
     checkForWin() {
        return document.querySelectorAll('.hide').length === 0;
     }

     /**
      * Displays the original start screen overlay
      * If player won: winner message
      * If lost: loser message
      */
      gameOver() {
        const overlay = document.getElementById('overlay');
        let gameOverMsg = document.getElementById('game-over-message');
        overlay.style.display = 'block';
        if (this.checkForWin() === true) {
            gameOverMsg.innerText = 'YOU GOT IT!';
            overlay.classList.add('win');
        } else {
            gameOverMsg.innerText = 'GAME OVER. TOO BAD.';
            overlay.classList.add('lose');
        }

      }
}