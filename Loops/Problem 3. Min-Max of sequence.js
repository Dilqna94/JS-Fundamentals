/**
 Problem 3. Min/Max of sequence

 Write a script that finds the max and min number from a sequence of numbers.
 */
var numbers = [33504, 15963, 94073, 56791, 81681, 4058, 68912, 40887, 60265, 8954, 70585, 84429, 16066, 30210,
        51332, 58345, 30871, 3257, 50976, 11018, 32154, 23075, 3477, 11539, 59347, 60773, 53908, 78723, 46588, 7584],
    min= 0,
    max = 0;

for (var i = 0; i < numbers.length; i++) {
    if (numbers[max] < numbers[i]) max = i;
    if (numbers[i] < numbers[min]) min = i;
}

console.log('min: ' + numbers[min]);
console.log('max: ' + numbers[max]);