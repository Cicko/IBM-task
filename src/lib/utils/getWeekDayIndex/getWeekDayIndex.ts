import { weekDays } from '../../../config/config';
import { WeekDay } from '../../../@types/types'
import IncorrectWeekDayError from '../../errors/IncorrectWeekDayError'

/**
 * @description This function returns the index of a weekday in english language. The index is used by the Date object to
 * specify to which week day corresponds a specific date.
 *
 * @param weekDay: WeekDay: Concrete week day specified in english language.
 */
export default function getWeekDayIndex(weekDay: WeekDay): number | never {
    if (!weekDays.includes(weekDay)) {
        throw new IncorrectWeekDayError(weekDay)
    }
    return weekDays.indexOf(weekDay) + 1
}
