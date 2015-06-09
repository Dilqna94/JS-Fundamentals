/**
 Problem 5. Youngest person

 Write a function that finds the youngest person in a given array of people and prints his/hers full name
 Each person has properties firstname, lastname and age.
 */
function findYoungestPerson(persons) {
    var youngestAge = Number.MAX_VALUE;
    var youngest = "";

    for (var i = 0; i < persons.length; i++) {
        var currAge = persons[i].age;

        if (currAge < youngestAge){
            youngestAge = currAge;
            youngest = "The youngest person is " + persons[i].firstname + " " + persons[i].lastname;
        }
    }

    return console.log(youngest);
}

var persons = [
    { firstname : 'Spas', lastname: 'Spasov', age: 32},
    { firstname : 'Bay', lastname: 'Ivan', age: 81},
    { firstname : 'Baba', lastname: 'Ginka', age: 40}]
findYoungestPerson(persons);