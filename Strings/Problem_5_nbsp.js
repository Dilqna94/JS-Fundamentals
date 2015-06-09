/**
 *Problem 5. nbsp

 Write a function that replaces non breaking white-spaces in a text with &nbsp;
 */


function replaceSpaces(str){
    var newText = "";

    for (var i = 0; i < str.length; i++) {
        var currElem = str[i];

        if (currElem == " "){
            currElem = currElem.replace(" ", "");
        }

        newText += currElem;
    }

    return newText;
}

console.log(replaceSpaces('But you were living in another world tryin\' to get your message through'));