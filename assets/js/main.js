function isWeekend(month, date, year) {
    const d = new Date(year, month - 1, date)
    if (d.getDay() === 0 || d.getDay() === 6) {
        return "Weekend"
    } else {
        return "Arbeitstag"
    }
}

console.log(isWeekend(12, 15, 2019)) // sunday = weekend
console.log(isWeekend(2, 16, 2001)) // friday = Arbeitstag
console.log(isWeekend(2, 1, 2020)) // saturday = weekend
console.log(isWeekend(2, 29, 2020)) // saturday = weekend
console.log(isWeekend(1, 26, 2020)) // sunday = weekend