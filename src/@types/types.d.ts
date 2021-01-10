export type WeekDay =
  'monday' |
  'tuesday' |
  'wednesday' |
  'thursday' |
  'friday' |
  'saturday' |
  'sunday'

export interface IDateCriteria {
  day: number
  weekDay: WeekDay
}

export type IDatesInYearResponse = Array<Date>


export type getDatesInYearWhere = (year: string, day: IDateCriteria) => IDatesInYearResponse;
