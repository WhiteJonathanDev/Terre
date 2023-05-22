const number = process.argv[2]

result = () => {
    return Math.sqrt(number)
}

if (number < 0 || isNaN(number)) {
    console.log('error')
} else {
    console.log(result())
}