const number = process.argv[2]

isNbPremier = () => {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false
        } else {
            return true
        }
    }
}

if (number < 0 || isNaN(number)) {
    console.log('error.')
} else if (number < 2 || !isNbPremier()) {
    console.log('Non,'  + number + " n'est pas un nombre premier")
} else {
    console.log('Oui,'  + number + ' est un nombre premier')
}