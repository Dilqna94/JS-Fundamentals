/**
 *Problem 4. Has property

 Write a function that checks if a given object contains a given property.
 */
var person = {name: 'Pesho', age: 50, gender: 'animal'};

console.log(person);
console.log('has name: ' + hasProp(person, 'name'));
console.log('has gender: ' + hasProp(person, 'gender'));
console.log('married: ' + hasProp(person, 'married'));


function hasProp(object, property){
    return object.hasOwnProperty(property);
}