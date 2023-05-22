const alphabetLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const arg = process.argv[2]
const index = alphabetLetters.findIndex(letter => letter === arg)

let result = ''

for (let i = index; i < alphabetLetters.length; i++) {
 result += alphabetLetters[i]
}
console.log(result+'\n')
