/*
 Write an if statement that takes two double variables a and b and exchanges their values if the first one is greater than the second.
 As a result print the values a and b, separated by a space.
 */



function Biggest(a, b){
    if(a > b){
        var tmp = a;
        a = b;
        b= tmp;
    }

    console.log('Result: ' +a + '\t' + b);
}


Biggest(15, 3);
Biggest(5, 15)