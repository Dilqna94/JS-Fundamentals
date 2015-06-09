/**
 * Problem 2. Remove elements

 Write a function that removes all elements with a given value.
 Attach it to the array type.
 */
Array.prototype.removeItem = function (value) {
    for (var i = 0; i < this.length; i++) {
        var currElem = this[i];

        if (currElem === value) {
            this.splice(i, 1);
        }
    }

    return this;
};

var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
console.log(arr.removeItem(1));

var arr = ['hi', 'bye', 'hello'];
console.log(arr.removeItem('bye'));