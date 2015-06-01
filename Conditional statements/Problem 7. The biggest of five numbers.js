/**
 Write a script that finds the greatest of given 5 variables.
 Use nested if statements.
 */
function getBiggest(a, b, c, d, e){
    var greatest = Math.max();

    if(a > greatest){
        greatest = a;
    }
    if(b > greatest){
        greatest = b;
    }
    if(c > greatest){
        greatest = c;
    }
    if(d > greatest){
        greatest = d;
    }
    if(e > greatest){
        greatest = e;
    }

    return greatest;
};

console.log(getBiggest(5,10,6,48,9));