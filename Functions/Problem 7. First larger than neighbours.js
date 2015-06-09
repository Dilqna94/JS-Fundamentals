/**
 * Problem 7. First larger than neighbours

 Write a function that returns the index of the first element in array that is larger than its neighbours or -1, if there’s no such element.
 Use the function from the previous exercise.
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
function getIndex(arrey){

    for (var i in arrey){
        if(larger(arrey,i)){
            console.log(i);
        }
       else
        {
            return -1;
        }
    }
}
console.log(getIndex([1,8,5,2]));
//console.log(getIndex([4,4]));