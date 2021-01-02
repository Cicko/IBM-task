/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 19.12.20 - 2:59
 **/

export default class IncorrectWeekDayError extends Error {
    constructor(incorrect: string) {
        super()
        this.message = `${incorrect} is not a correct week day.`
    }
}
