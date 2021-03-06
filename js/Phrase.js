/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
     * Adds letter placeholders to the display when the game starts
     */
     addPhraseToDisplay() {
        document.querySelector('#phrase ul').innerHTML = '';
        document.querySelector('#phrase ul').insertAdjacentHTML("beforeend",
            Array.from(this.phrase).map(letter => {
                if(letter === ' ') {
                    return `<li class="space"> </li>`
                } else {
                    return `<li class="hide letter ${letter}">${letter}</li>`
                }
            }).join('')
        ) 
    }

    /**
     * Checks to see if the letter selected by the player matches a letter in the phrase
     * @returns {Boolean} True if letter matches
     */
    checkLetter(letterPress) {
        return (this.phrase.includes(letterPress.innerText || letterPress.key))
    }

    /**
     * Reveals the letter(s) on the board that matches the player's selection
     */
    showMatchedLetter(letter) {
        Array.from(document.getElementsByClassName(letter)).map(element => {
            element.classList.add("show"); 
            element.classList.remove("hide");
        })
    }
}

