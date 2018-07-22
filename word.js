var LETTER = require('./letter');

var Word = function () {

    this.arrayLetters = [];
    this.wordTodisplay = "";

    this.createWord = function (word) {
        for (i = 0; i < word.length; i++) {
            var newLetter = new LETTER(word.charAt(i));
            this.arrayLetters.push(newLetter);
        };
    };

    this.displayWord = function () {
        
        for (i = 0; i < this.arrayLetters.length; i++) {
            this.wordTodisplay = this.wordTodisplay + this.arrayLetters[i].getLetter();
        };
        console.log(this.wordTodisplay);
    };
};

module.exports = Word;