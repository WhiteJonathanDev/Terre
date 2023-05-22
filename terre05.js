const arg1 = process.argv[2]
const arg2 = process.argv[3]

const resultat = arg1 / arg2
const reste = arg1 % arg2

if ((!isNaN(resultat) || !isNaN(reste)) && arg1 > 0 && arg2 > 0 && arg1 > arg2) {
    console.log('resultat: ' + Math.floor(resultat))
    console.log('reste: ' + reste)
} else {
    console.log('erreur')
}