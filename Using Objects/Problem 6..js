/**
 * Write a function that groups an array of people by age, first or last name.
 The function must return an associative array, with keys - the groups, and values - arrays with people in this groups
 Use function overloading (i.e. just one function)
 */
function person(firstname, lastname, age) {
    if (!(this instanceof  person)) {
        return new person(firstname, lastname, age);
    }
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
}

person.prototype.toString = function() {
    return '(' + this.firstname + ' ' + this.lastname + ',' + this.age + ')';
};

var people = [
    new person('Spas', 'Ivanov', 24),
    new person('Spas', 'Stoqnov', 25),
    new person('Spas', 'Spasov', 26),
    new person('Dragan', 'Ivanov', 25),
    new person('Pesho', 'Ivanov', 24)
];

function group(arr, prop) {
    var group = [];
    for (var i in arr) {
        var currProp = arr[i][prop];
        group[currProp] = group[currProp] || [];
        group[currProp].push(arr[i]);
    }
    return group;
}

function printGroups(prop, arr) {
    console.log(prop);
    for (var index in arr) {
        console.log(arr[index].join('; '));
    }
    console.log();
}

var props = ['firstname', 'lastname', 'age'];

for (var i in props) {
    var groups = group(people, props[i]);
    printGroups(props[i], groups);
}