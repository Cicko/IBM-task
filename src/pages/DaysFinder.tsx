import * as React from 'react'
import { Button, Input } from 'antd'
import getDatesInYearWhere from '../lib/utils/getDatesInYearWhere/getDatesInYearWhere'
import { IDatesInYearResponse } from '../@types/types'

interface DaysFinderProps {

}


const DaysFinder: React.FC<DaysFinderProps> = (props: DaysFinderProps) => {
    const [fridays, setFridays] = React.useState<IDatesInYearResponse>([])
    const [year, setYear] = React.useState<string>(`${new Date().getFullYear()}`)

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setYear(e.target.value)
    }

    const updateFriday13Days = () => {
        const days = getDatesInYearWhere(year, { day: 13, weekDay: 'friday' })
        console.log(days)
        setFridays(days)
    }

    return (
        <div>
            <div>

            </div>
            <Input onChange={onInputChange}/>
            <Button onClick={updateFriday13Days}>Get Friday 13</Button>
            {fridays.length}
        </div>
    )
}

export default DaysFinder
