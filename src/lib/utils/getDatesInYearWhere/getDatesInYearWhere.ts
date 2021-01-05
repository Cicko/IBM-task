import { FIRST_MONTH, LAST_MONTH } from '../../../config/config'
import { IDatesInYearResponse, IDateCriteria } from '../../../@types/types'
import getWeekDayIndex from '../getWeekDayIndex/getWeekDayIndex'

/**
 * @description This function returns the dates within a specific year that matches some criteria.
 *
 * @param year : string : Year from which we want to extract the dates
 * @param criteria : IDateCriteria : Criteria that the dates should fulfill such number of day and week day
 */
export default function getDatesInYearWhere(year: string, criteria: IDateCriteria): IDatesInYearResponse {
    let result: IDatesInYearResponse = []
    const desiredDayNum: number = criteria.day
    const desiredYearNum: number = Number(year)
    const desiredWeekDayIndex: number = getWeekDayIndex(criteria.weekDay)

    for (let month = FIRST_MONTH; month <= LAST_MONTH; month++) {
        const date = new Date(desiredYearNum, month, desiredDayNum)

        if (date.getDay() === desiredWeekDayIndex && date.getDate() === desiredDayNum) {
            result.push(date)
        }
    }
    return result
}

