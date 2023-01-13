const findTheOldest = function(arrayOfPeople) {
    let ageOfDeathAnt = -Infinity;
    return older = arrayOfPeople.reduce((ageAtDeath, person)=>{
    if(!person.yearOfDeath){
        ageAtDeath = new Date().getFullYear() - person.yearOfBirth
    } else{
        ageAtDeath = person.yearOfDeath - person.yearOfBirth
    }
    if(ageAtDeath > ageOfDeathAnt){
        ageOfDeathAnt = ageAtDeath
        oldest = person
    }
    return oldest
    }, 0)
};


// Do not edit below this line
module.exports = findTheOldest;
