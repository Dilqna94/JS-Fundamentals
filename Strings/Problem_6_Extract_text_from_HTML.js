/**
 * Problem 6. Extract text from HTML

 Write a function that extracts the content of a html page given as text.
 The function should return anything that is in a tag, without the tags.
 */

function extractText(text) {
    var inTags = false;
    var extrText = '';
    for (var i = 0; i < text.length; i++) {
        if (inTags) {
            if (text[i] === '>') {
                inTags = false;
            }
        }
        else {
            if (text[i] == '<') {
                inTags = true;
            } else {
                extrText += text[i];
            }
        }
    }
    return extrText;
}

var text = "<html><head><title>Sample site</title></head><body><div>text<div>more text</div>and more...</div>in body</body></html>";

console.log(extractText(text));
