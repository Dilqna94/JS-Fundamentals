/**
 Problem 2. Reverse number

 Write a function that reverses the digits of given decimal number.
 */
function reverse(num) {
    num = num.toString();
    var o = '';
    for (var i = num.length - 1; i >= 0; i--)
        o += num[i];
    return o;
}
console.log(reverse(253));


function reverseSecondWay(number) {
    number = number.toString();
    return number.split('').reverse().join('');
}

console.log(reverseSecondWay(459))