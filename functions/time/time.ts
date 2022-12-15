const getShortDateString = (dateObject: Date) => {
    const monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const day = dateObject.getDate()
    const month = dateObject.getMonth()
    const year = dateObject.getFullYear()

    const shortDateString = `${monthsArray[month]} ${day}, ${year}`
    return shortDateString
}

const getDateString = (dateObject: Date) => {
    const day = dateObject.getDate()
    const month = dateObject.getMonth()
    const year = dateObject.getFullYear()

    const dateString = `${day}/${month + 1}/${year}`
    return dateString
}


export { getDateString, getShortDateString }