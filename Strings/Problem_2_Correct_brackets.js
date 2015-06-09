/**
 Problem 2. Correct brackets

 Write a JavaScript function to check if in a given expression the brackets are put correctly.
 */
function checkBrackets(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == ")"){
            count++;
        } else if (str[i] == "(") {
            count--;
        }
    }

  return (count == 0)? true:false;
}
console.log(checkBrackets('( ( a + b ) / 5 – d )'));
console.log(checkBrackets(') ( a + b ) )'));