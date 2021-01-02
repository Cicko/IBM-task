/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 19.12.20 - 2:56
 **/
import getWeekDayIndex from './getWeekDayIndex'
import IncorrectWeekDayError from '../../errors/IncorrectWeekDayError'

describe('getWeekDayIndex() function', () => {
    it('should throw error if an incorrect week day is given', () => {
         // @ts-ignore
        expect(() => { getWeekDayIndex('incorrect') }).toThrow(IncorrectWeekDayError)
    })

    it ('should return 1 for "monday"', () =>  {
        expect(getWeekDayIndex('monday')).toBe(1)
    })
    it ('should return 2 for "tuesday"', () =>  {
        expect(getWeekDayIndex('tuesday')).toBe(2)
    })
    it ('should return 3 for "wednesday"', () =>  {
        expect(getWeekDayIndex('wednesday')).toBe(3)
    })
    it ('should return 4 for "thursday"', () =>  {
        expect(getWeekDayIndex('thursday')).toBe(4)
    })
    it ('should return 5 for "friday"', () =>  {
        expect(getWeekDayIndex('friday')).toBe(5)
    })
    it ('should return 6 for "saturday"', () =>  {
        expect(getWeekDayIndex('saturday')).toBe(6)
    })
    it ('should return 7 for "sunday"', () =>  {
        expect(getWeekDayIndex('sunday')).toBe(7)
    })
})
