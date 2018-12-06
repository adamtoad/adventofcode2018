// Import fs module
var fs = require('fs');

// Method to calculate answer
var calculate = function(input){
    var answer = 0;
    input.toString().split('\n').forEach(function (line) { answer += eval(line)});
    console.log(answer);

}

// Read txt file
fs.readFile('input/input.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    calculate(data);
})