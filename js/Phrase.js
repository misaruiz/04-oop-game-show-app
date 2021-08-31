/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
        this.phraseArray = Array.from(this.phrase);
        this.addPhraseToDisplay = function() {
            document.querySelector('#phrase ul').insertAdjacentHTML("beforeend",
                this.phraseArray
                    .map(letter => {
                        if(letter === ' ') {
                            return `<li class="space"> </li>`
                        } else {
                            return `<li class="hide letter ${letter}">${letter}</li>`
                        }
                    })
            ) 
        };
        this.checkLetter = function() {
            document.addEventListener('keydown', (e) => {
                this.phraseArray.forEach(letter => {
                    if (letter === e.target) {
                        showMatchedLetter(letter);
                    } 
                })
            })
        };
        this.showMatchedLetter = function(letter) {
            document.getElementsByClassName(letter).map(element => {
                element.classList.add("show"); 
                element.classList.remove("hide");
            }
            )
        };
    }
}

