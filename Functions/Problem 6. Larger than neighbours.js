/**
 * Problem 6. Larger than neighbours

 Write a function that checks if the element at given position in given array of integers is bigger than its two neighbours (when such exist).
 */
function larger(arr, index){
    var result=" ";
    if ((index == 0) || (index == arr.length - 1)) {
        result = "only one neighbor";
    }
    else if ((index > 0) && (index < arr.length)){
        if ((arr[index] > arr[index-1]) && (arr[index] > arr[index + 1])){
            result = "bigger";
        } else{
            result = "not bigger";
        }
    } else{
        result = "invalid index";
    }

    return result;
}
console.log(larger([2,4,3,6], 1));
console.log(larger([4,4,4], 1));