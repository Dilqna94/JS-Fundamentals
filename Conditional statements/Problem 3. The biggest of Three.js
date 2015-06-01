/**
 Problem 3. The biggest of Three
 Write a script that finds the biggest of three numbers.
 Use nested if statements.
 */

function biggestOfThree(a,b,c){
    if(a>b){
        if(a>c)
        {
          return a;
        }
        return c;
    }
    if(c>b)
    {
        return c;
    }
    return b;

}


console.log('The biggest of 1,2,3 is:'+biggestOfThree(1,2,3));