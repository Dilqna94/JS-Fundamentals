/**
 * Problem 1. Make person

 Write a function for creating persons.
 Each person must have firstname, lastname, age and gender (true is female, false is male)
 Generate an array with ten person with different names, ages and genders
 */
function  end(){
    console.log("==============================");
}
function makePeople(fname, lname, age, gender){
    return{
        fname:fname,
        lname:lname,
        age:age,
        isFem:gender
    }
}
var people=[0,1,2,3,4,5,6,7,8,9].map(function(_, i){
    return makePeople('Human #'+i,'lname #'+i, 12+i, Boolean(i % 2))});
people.forEach(function (person) {console.log(person);});
end();
/*
 Problem 2. People of age

 Write a function that checks if an array of person contains only people of age (with age 18 or greater)
 Use only array methods and no regular loops (for, while)
*/

console.log('are all ppl >=18: ' + people.every(function(person){return person.age >= 18;}));
end();

/*
 Problem 3. Underage people

 Write a function that prints all underaged persons of an array of person
 Use Array#filter and Array#forEach
 Use only array methods and no regular loops (for, while)
 */

console.log('Underage: ');

people.filter(function(person){return person.age < 18;})
    .forEach(function (person) {console.log(person);});
end();
/*
 Problem 4. Average age of females

 Write a function that calculates the average age of all females, extracted from an array of persons
 Use Array#filter
 Use only array methods and no regular loops (for, while)
 */
var women = people.filter(function(person) {return person.isFem;}),
    sum = women.reduce(function (sum, person) {return sum + person.age;}, 0),
    avg = sum / women.length;

console.log('women: ');
women.forEach(function (person) {console.log(person);});
console.log('average age: ' + avg);
end();

/*
 Problem 5. Youngest person

 Write a function that finds the youngest male person in a given array of people and prints his full name
 Use only array methods and no regular loops (for, while)
 Use Array#find
 */

if (!Array.prototype.find) {
    Array.prototype.find = function(callback) {
        var i, len = this.length;
        for (i = 0; i < len; i+=1) {
            if (callback(this[i], i, this)) {
                return this[i];
            }
        }
    }
}


function youngestMan (people) {
    var youngestMale =  people.sort(function (a, b) {return a.age - b.age;})
        .find(function(person) {return !person.isFem;});

    return youngestMale.fname + ' ' + youngestMale.lname +
        '(' + youngestMale.age + ')';
}

console.log(youngestMan(people));
end();

/*
Problem 6. Group people

 Write a function that groups an array of persons by first letter of first name and returns the groups as a JavaScript Object
 Use Array#reduce
 Use only array methods and no regular loops (for, while)
 */


console.log('Groups: ');
var filter = people.reduce(function (lett, person) {
    var letter = person.fname[0];

    if (lett[letter]) {
        lett[letter].push(person);
    } else {
        lett[letter] = [person];
    }

    return lett;
}, {});

console.log(filter);
end();