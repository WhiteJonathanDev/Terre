const args = [process.argv[2], process.argv[3], process.argv[4]]

getMiddleArg = () => {
    return args.sort((a, b) => {
        return a - b
    })
}

if (isNaN(process.argv[2]) || isNaN(process.argv[3]) || isNaN(process.argv[4])) {
    console.log('Please, provide me numbers')
} else if (process.argv[2] === process.argv[3] || process.argv[3] === process.argv[4] || process.argv[2] === process.argv[4]) {
    console.log('error')
} else {
    console.log(getMiddleArg()[1])
}