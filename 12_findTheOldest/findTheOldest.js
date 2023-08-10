const findTheOldest = function(array) {
   return array.reduce((a, b) => {
    let lastguy = getAge(a.yearOfDeath, a.yearOfBirth)
    let newGuy = getAge(b.yearOfDeath, b.yearOfBirth)
    return lastguy > newGuy ? a : b
   })

}

const getAge = function(deathDate, birthDate){
    if (!deathDate){
        deathDate = new Date().getFullYear()
    }
    return deathDate - birthDate
}


// Do not edit below this line
module.exports = findTheOldest;
