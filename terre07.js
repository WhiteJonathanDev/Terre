const params = process.argv

createStringToCountLength = () => {
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

if (params.length !== 3 || !isNaN(params[2])) {
    console.log('erreur.')
} else {
    console.log(createStringToCountLength().length)
}