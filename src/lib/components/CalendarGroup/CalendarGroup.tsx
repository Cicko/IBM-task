import * as React from 'react'
import { Empty } from 'antd'
import Calendar from 'react-calendar'

export interface CalendarGroupProps {
    dates: Array<Date>
    locale: string
}

/**
 * @description This component is used to display all dates that are passed as props in a container
 * 
 * @param props : CalendarGroupProps
 */
const CalendarGroup: React.FC<CalendarGroupProps> = (props) => {
    const { dates, locale } = props

    const renderMonth = (date: Date) => (
        <Calendar className="calendar" value={date} key={date.toDateString()} locale={locale} />
    )

    if (dates.length === 0) {
        return <Empty description="No dates provided"/>
    }

    return (
        <div className="calendar-group">
            {dates.map(renderMonth)}
        </div>
    )
}

export default CalendarGroup