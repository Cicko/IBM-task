/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 19.12.20 - 2:44
 **/
import getDatesInYearWhere from './getDatesInYearWhere'

describe('getDaysInYearWhere() function', () => {
    it ('should return 2 dates for Friday 13 in the year 2020', () => {
        const dates = getDatesInYearWhere({ day: 13, weekDay: 'friday', year: 2020 })
        const first = new Date('March 13, 2020')
        const second = new Date('November 13, 2020')

        expect(dates.length).toBe(2)
        expect(dates[0]).toStrictEqual(first)
        expect(dates[1]).toStrictEqual(second)
    })
    it ('should return 3 dates for Friday 13 in the year 2015', () => {
        const dates = getDatesInYearWhere({ day: 13, weekDay: 'friday', year: 2015 })
        const first = new Date('February 13, 2015')
        const second = new Date('March 13, 2015')
        const third = new Date('November 13, 2015')

        expect(dates.length).toBe(3)
        expect(dates[0]).toStrictEqual(first)
        expect(dates[1]).toStrictEqual(second)
        expect(dates[2]).toStrictEqual(third)
    })
})
