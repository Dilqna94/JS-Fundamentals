/**
 Problem 1. English digit

 Write a function that returns the last digit of given integer as an English word.
 */

function lastDigit (num) {
    switch(num%10){
        case 0: return 'zero';
        case 1: return 'one';
        case 2: return 'two';
        case 3: return 'three';
        case 4: return 'four';
        case 5: return 'five';
        case 6: return 'six';
        case 7: return 'seven';
        case 8: return 'eight';
        case 9: return 'nine';
        default: return 'not number';
    }
};


console.log(lastDigit(10));
console.log(lastDigit(1555));
console.log(lastDigit(989898));
console.log(lastDigit('happy'));