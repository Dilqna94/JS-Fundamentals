/**
 *Problem 10. Find palindromes

 Write a program that extracts from a given text all palindromes, e.g. "ABBA", "lamal", "exe".
 */
function findPalindromes(str) {
    var palindromes = [];
    var result = "";
    var words = str.split(/\W+/i).filter(function (e) {
        return e != "";
    });

    for (var i = 0; i < words.length; i++) {
        var isPal = false;
        if (words[i].length == 1) {
            palindromes.push(words[i]);
            continue;
        }

        for (var l = 0, r = words[i].length - 1; l < (words[i].length - 1 ) / 2; l++, r--) {
            if (words[i][l].toLowerCase() !== words[i][r].toLowerCase()) {
                isPal = false;
                break;
            } else {
                isPal = true;
            }
        }
        if (isPal) {
            palindromes.push(words[i]);
        }
    }

    console.log(palindromes.toString());
}
findPalindromes('There is a man, his name was Bob.');