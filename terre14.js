buildList = (args) => {
    let list = []
    for (let i = 2; i < args.length; i++) {
        list.push(args[i] * 1)
    }
    return list
}

const propsList = buildList(process.argv)

const checkIfArrayIsSorted = () => {
    let result = true
    for (let i = 0; i < propsList.length - 1; i++) {
        if (propsList[i] > propsList[i+1]) {
            result = false
        }
    }
    return result
}

if (propsList.some(el => isNaN(el))) {
    console.log('error')
} else {
    if (checkIfArrayIsSorted()) {
        console.log('Triée !')
    } else {
        console.log('Pas triée !')
    }
}
