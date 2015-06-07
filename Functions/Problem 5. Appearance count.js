/**
 * Problem 5. Appearance count

 Write a function that counts how many times given number appears in given array.
 Write a test function to check if the function is working correctly.
 */
function countOfNum(arr, num){
   var counter = 0;
    for(var i=0; i<arr.length; i++){
        if(num==arr[i])
            counter++;
    }
    return counter;
}
console.log(countOfNum( arr=[1,2,1,3,1], 1));