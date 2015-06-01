/**
 *Write a script that prints all the numbers from 1 to N, that are not divisible by 3 and 7 at the same time
 */
function printToN(num){
    for(var i=1; i<=num; i++){
        if((i%3)|| (i%7)){
            console.log(i);
        }
        else{
            console.log(i +' is divisible by 3 and 7 ')
        }
    }
};

printToN(50);