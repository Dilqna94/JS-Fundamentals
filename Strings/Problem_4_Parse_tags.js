/**
 * Problem 4. Parse tags

 You are given a text. Write a function that changes the text in all regions:
 */
function changeText(str) {
    var result = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== '<') {
            result += str[i];
        }
        else {
            i++;
            if (str[i] === 'm') {
                i += 8;
                while (str[i] !== '<') {
                    if (Math.round(Math.random())) {
                        result += str[i].toUpperCase();
                    }
                    else {
                        result += str[i].toLowerCase();
                    }
                    i++;
                }
                i += 10;
            }
            if (str[i] === 'u') {
                i += 7;
                while (str[i] !== '<') {
                    result += str[i].toUpperCase();
                    i++;
                }
                i += 9;
            }
            if (str[i] === 'l') {
                i += 8;
                while (str[i] !== '<') {
                    result += str[i].toLowerCase();
                    i++;
                }
                i += 10;
            }
        }
    }
    return result;
}
var text = "We are  <mixcase>living</mixcase>  in a  <upcase>yellow submarine</upcase> . We  <mixcase>don't</mixcase>  have  <lowcase>AnyThing</lowcase>  else.";


    console.log(text);
    console.log(changeText(text));
