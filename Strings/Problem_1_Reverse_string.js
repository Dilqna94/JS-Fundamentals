/**
 *Problem 1. Reverse string

 Write a JavaScript function that reverses a string and returns it.
 */
var string = 'string';
function reverse(str) {
    var arr = [];
    for (var i = str.length - 1, j = 0; i >= 0; i--, j++)
        arr[j] = str[i];
    return arr.join('');
};
console.log(reverse(string));
