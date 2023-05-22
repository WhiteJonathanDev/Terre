const arg = process.argv[2]

checkProps = () => {
    if (!isNaN(arg)) {
        if (((arg * 1) % 2) === 0) {
            return 'pair'
        } else {
            return 'impair'
        }
    } else {
        return 'Tu ne me la mettras pas à l’envers.'
    }
}

console.log(checkProps(arg))