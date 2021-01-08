import CalendarGroup from './CalendarGroup'
import { render } from '@testing-library/react'
import { locale } from '../../../config/config'

describe('CalendarGroup Component', () => {
    it ('should display "No data" if there are no dates or empty array passed as props', () => {
        const rendered = render(<CalendarGroup dates={[]} locale={locale}/>)

        expect(rendered.getAllByText('No dates provided')).not.toBeNull()
    })

    it ('should have two calendars when two dates are passed to the component', () => {

        const date1 = new Date(1, 1, 2021)
        const date2 = new Date(2, 2, 2021)

        const { container } = render(<CalendarGroup dates={[date1, date2]} locale={locale}/>)

        expect(container.querySelectorAll('.calendar')).toHaveLength(2)

    })

    
    it ('should have three calendars when three dates are passed to the component', () => {

        const date1 = new Date(1, 1, 2021)
        const date2 = new Date(2, 2, 2021)
        const date3 = new Date(3, 3, 2022)

        const { container } = render(<CalendarGroup dates={[date1, date2, date3]} locale={locale}/>)

        expect(container.querySelectorAll('.calendar')).toHaveLength(3)

    })
})