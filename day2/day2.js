// Import fs module
var fs = require('fs');

// Method for checking amount of letters
// NEEDS TWEEKED
var checkNoOfLetters = function(){
    if (twoOfLetter === false && threeOfLetter === false && moreThanThree === false)
    {
        twoOfLetter = true;
    }
    else if (twoOfLetter === true)
    {
        twoOfLetter = false;
        threeofLetter = true;
    }
    else if (threeOfLetter === true)
    {
        threeOfLetter = false;
        moreThanThree = true;
    }
}
// Method for calculating checksum
var calculateChecksum = function(input) {
    var answer = 0;
    var usedLetters = "";
    // NOTE: following will be used to count letters in a ~single line~
    var twoOfLetter = false;
    var threeOfLetter = false;
    var moreThanThree = false;
    input.toString().split("").forEach(function(letter){
        console.log(letter + " " + usedLetters);
        usedLetters += letter;
        if (usedLetters.includes(letter))
        {
            
        }
    });
}

// Read txt file
fs.readFile('input/input.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    calculateChecksum(data);
})