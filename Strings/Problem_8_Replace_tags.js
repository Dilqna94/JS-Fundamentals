/**
 * Problem 8. Replace tags

 Write a JavaScript function that replaces in a HTML document given as string all the tags <a href="�">�</a> with corresponding tags [URL=�]�/URL].
 */
var text = '<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. ' +
    'Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>';

text = replaceLink(text);
console.log(text);

function replaceLink(text) {
    var regex = /<\s*a\s+href\s*=\s*"(.*?)"\s*>(.*?)<\s*\/a\s*>/gi;

    return text.replace(regex, function(tag, url, content) {
        return '[URL=' + url + ']' + content + '[\/URL]';
    });
}