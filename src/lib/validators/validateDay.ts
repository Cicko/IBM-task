import { FormInstance } from 'antd/lib/form'

const validateDay = (value: number, form: FormInstance) => {
    if (value < 1) {
        return form.setFields([{ name: 'day', errors: ['Day can not be less than 1'] }])
    }
    if (value > 31) {
        return form.setFields([{ name: 'day', errors: ['Day can not be more than 31'] }])
    }
}

export default validateDay