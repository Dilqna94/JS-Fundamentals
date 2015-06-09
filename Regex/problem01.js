/*
 Problem 1. Format with placeholders

 Write a function that formats a string. The function should have placeholders, as shown in the example
 Add the function to the String.prototype
 */
if (!String.prototype.format) {
    String.prototype.format = function (options) {
        var pattern,
            result = this,
            prop;
        for (prop in options) {
            pattern = new RegExp('\#\{' + prop + '\}');
            result = result.replace(pattern, options[prop]);
        }
        return result;
    }

}
var text1 = { name: 'John' };
var text2 = { name: 'John', age: 13 };
var text01 = 'Hello, there! Are you #{name}?';
var text02 = 'My name is #{name} and I am #{age}-years-old';

function problem1() {
    console.log(text01.format(text1));
    console.log(text02.format(text2));
}

problem1();