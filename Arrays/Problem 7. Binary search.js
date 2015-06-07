/**
 * Problem 7. Binary search

 Write a script that finds the index of given element in a sorted array of integers by using the binary search algorithm.
 */

function binaryS(arr, number, start, end){
    var middle = start + Math.floor((end - start) / 2);

    if (end < start || number > arr[end]) {
        return -1;
    }

    if (arr[middle] > number) {
        return binaryS(arr, number, start, middle - 1);
    } else if (arr[middle] < number) {
        return binaryS(arr, number, middle + 1, end);
    } else {
        return middle;
    }
}
function findIndex(values, target) {
    return binaryS(values, target, 0, values.length - 1);
};
console.log(findIndex([4,5,6,7,8,9,10], 5));