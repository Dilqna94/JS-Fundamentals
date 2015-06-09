/**
 * Problem 3. Sub-string in text

 Write a JavaScript function that finds how many times a substring is contained in a given text (perform case insensitive search).
 */
function countSubstring(arr) {
    var count = 0;
    var keyWord = arr[0].toLowerCase();
    var text = arr[1].toLowerCase();

    for (var i = 0; i < text.length; i++) {
        var currWord = text[i].toLowerCase();

        if (text.substr(i, keyWord.length) == arr[0]){
            count++;
        }
    }

    return count;
}

console.log(countSubstring(['in', 'We are living in a yellow submarine. We don\'t have anything else. ' +
'Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.']));
console.log(countSubstring(['your', 'No one heard a single word you said. They should have seen it in your eyes.' +
' What was going around your head.']));
console.log(countSubstring(['but', 'But you were living in another world tryin\' to get your message through.']));
