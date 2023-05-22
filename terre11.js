const hours = process.argv[2].split(':')[0]
const minutes = process.argv[2].split(':')[1]
convertHoursTime = () => {
    let hoursLocal = hours
    if (hours !== '0' && hours !== '12') {
        hoursLocal = hours % 12
    }
    return hoursLocal < 1 ? (hoursLocal + '0') : hoursLocal
}

if (hours > 23 || hours < 0 || minutes > 59 || minutes < 0 || hours.length > 2 || minutes.length > 2 || isNaN(hours) || isNaN(minutes)) {
    console.log('Heure incorrect')
} else {
    console.log(convertHoursTime() + ':' + minutes + ' ' + (hours < '12' ? 'AM' : 'PM'))
}