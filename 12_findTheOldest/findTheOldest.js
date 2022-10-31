const findTheOldest = function(people) {
    date = new Date();
    for (i = 0; i < people.length; i++) {
        if (people[i].hasOwnProperty('yearOfDeath') === false) {
            people[i].yearOfDeath = date.getFullYear();
        }
    }
    ordered = people.sort((a,b) =>
        (a.yearOfDeath - a.yearOfBirth) < (b.yearOfDeath - b.yearOfBirth) ? 1 : -1);
    return ordered[0];
}

// Do not edit below this line
module.exports = findTheOldest;
