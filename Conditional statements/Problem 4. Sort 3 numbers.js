/**
 Sort 3 real values in descending order.
 Use nested if statements.
 */

function sortThreeNumbers(a,b,c) {
    var sort = [];

    if (a >= b) {
        if (b >= c) {
            sort.push(a, b, c);
        } else if (c > a) {
            sort.push(c, a, b);
        } else {
            sort.push(a, c, b);
        }
    } else {
        if (b >= c) {
            if (c >= a) {
                sort.push(b, c, a);
            } else {
                sort.push(b, a, c);
            }
        } else {
            sort.push(c, b, a);
        }
    }

    return sort.join(' ');

};
console.log(sortThreeNumbers(5,8,10));
console.log(sortThreeNumbers(22, 30, 5));