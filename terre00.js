const alphabetLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let result = ''

alphabetLetters.forEach(letter => {
    result += letter
})

// If native
// for (let i = 0; i < alphabetLetters.length; i++) {
//     result += alphabetLetters[i]
// }

console.log(result+'\n')