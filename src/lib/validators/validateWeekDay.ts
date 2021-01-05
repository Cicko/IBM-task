import { FormInstance } from 'antd/lib/form'
import { WeekDay } from '../../@types/types'
import { weekDays } from '../../config/config'

const validateWeekDay = (value: WeekDay, form: FormInstance) => {
    if (!weekDays.includes(value)) {
        return form.setFields([{ name: 'weekDay', errors: [`${value} is not a valid week day`] }])
    }
}

export default validateWeekDay