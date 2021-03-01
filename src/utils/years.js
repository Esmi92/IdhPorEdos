//This is to generate a range of years 

export default function years(year) {
    const allYears = []
    allYears.push(year)
    
    for (let i = year; allYears.length <= 10; i++) {
            const newYear = i + 1
            allYears.push(newYear)
    }

    return allYears
}