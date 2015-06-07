/**
 Problem 4. Number of elements

 Write a function to count the number of div elements on the web page
 * */


function countDivs(div) {


    var count = document.getElementsByTagName(div).length;
    document.getElementById('res').innerHTML = 'count: ' + count;
    console.log(div + ' count of divs: ' + count);
}
