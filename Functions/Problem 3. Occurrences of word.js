/**
 * Problem 3. Occurrences of word

 Write a function that finds all the occurrences of word in a text.
 The search can be case sensitive or case insensitive.
 Use function overloading.
 */

function countOcur(str, value){
    var regExp = new RegExp(value, "gi");
    return str.match(regExp) ? str.match(regExp).length : 0;
}
console.log(countOcur('this is string', 'is'));
console.log(countOcur('this Is SomEtHiNg', 'is'));