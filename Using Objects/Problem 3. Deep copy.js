/**
 * Problem 3. Deep copy

 Write a function that makes a deep copy of an object.
 The function should work for both primitive and reference types
 */
console.log(createCopy(5));
console.log(createCopy({name: 'Sasho', age: 55}));
console.log(createCopy('string'));

function createCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    var copy = obj.constructor();
    for (var prop in obj) {
        copy[prop] = createCopy(obj[prop]);
    }

    return copy;
}