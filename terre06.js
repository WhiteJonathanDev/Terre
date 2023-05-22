const params = process.argv

createStringToReverse = () => {
    let string = ""
    if (params.length > 1) {
        for (let i = 2; i < params.length; i++) {
            string += params[i]
            if (i < params.length - 1) {
                string += '\xa0'
            }
        }
    }
    return string
}

reverseString = () => {
    let string = createStringToReverse()
    let result = ""
    if (string === "") {
        result = 'Please, give me a param to reverse'
    } else {
        for (let i = string.length - 1; i > -1; i--) {
            result += string[i]
        }
    }
    return result
}
console.log(reverseString())