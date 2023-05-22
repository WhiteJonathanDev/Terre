const hours = process.argv[2].split(':')[0]
const minutes = process.argv[2].split(':')[1].charAt(0) + process.argv[2].split(':')[1].charAt(1)
const AmOrPm = process.argv[2].split(':')[1].charAt(2) + process.argv[2].split(':')[1].charAt(3)

convertHoursTime = () => {
    let hoursLocal = hours * 1
    if (hours !== '12') {
        hoursLocal = AmOrPm === 'AM' ? hours : (hours * 1 + 12)
    }
    return hoursLocal
}

if (hours > 12 || hours < 0 || minutes > 59 || minutes < 0 || hours.length > 2 || minutes.length > 2 || minutes.length < 2 || AmOrPm.length > 2 || AmOrPm.length < 2 || isNaN(hours)) {
    console.log('Heure incorrect')
} else {
    console.log(convertHoursTime() + ':' + minutes)
}