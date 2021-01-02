/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 19.12.20 - 2:44
 **/
import getDatesInYearWhere from './getDatesInYearWhere'

describe('getDaysInYear() function', () => {
    it ('should return 2 dates for Friday 13 in the year 2020', () => {
        const dates = getDatesInYearWhere('2020', { day: 13, weekDay: 'friday'})
        expect(dates.length).toBe(2)
    })
})
