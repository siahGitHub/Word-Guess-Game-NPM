var Letter = function (letter) {
   
    this.letter = letter;
    this.hasBeenGuessed = false;

    this.getLetter = function () {
        if (!this.hasBeenGuessed) {
            var placeholder = "-";
            var space = " ";
            if (this.letter === " ") {
                return space;
            } else {
                return placeholder;
            };
        } else {
            return this.letter;
        };
    };

    this.compareLetter = function (letterToCompare) {
        if (letterToCompare === this.letter) {
            this.hasBeenGuessed = true;
        };
    };
};

module.exports = Letter;