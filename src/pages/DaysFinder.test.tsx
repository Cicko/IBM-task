import DaysFinder from './DaysFinder'
import user from '@testing-library/user-event'
import { render, screen, waitFor } from '@testing-library/react'

window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};


// Official workaround to supress unnecessary warning "Not wrapped in act..."
// https://github.com/testing-library/react-testing-library#suppressing-unnecessary-warnings-on-react-dom-168
const originalError = console.error
const originalWarn = console.warn
beforeAll(() => {
  console.error = (...args: string[]) => {
    if (/Warning.*not wrapped in act/.test(args[0])) {
      return
    }
    originalError.call(console, ...args)
  }
  console.warn = (...args: any[]) => {
    if(typeof args[0] === 'string' && args[0].startsWith('async-validator:')) return
  
    originalWarn(...args)
  }
})

afterAll(() => {
  console.error = originalError
  console.warn = originalWarn
})

describe('DaysFinder component (defaulting day 13 friday)', () => {
    
    it ('should display a form', () => {
        const r = render(<DaysFinder day={13} weekDay={'friday'} />)
        expect(r.getByTestId('form')).not.toBeNull()
    })


    test ('should display 2 calendars for the year 2020 and 3 for 2015', async () => {
        const r = render(<DaysFinder day={13} weekDay={'friday'} />)
        
        const yearInput = screen.getByLabelText(/Year/i)
        expect(yearInput.value).toBe("2021")

        user.clear(yearInput)
        await user.type(yearInput, '2020')
        
        expect(yearInput.value).toBe("2020")
        expect(screen.getByText('No dates provided')).not.toBeNull()
        
        const submitButton = screen.getByTestId('submit')
        user.click(submitButton)
        
        await waitFor(() => {
            const calendars = r.container.querySelectorAll('.calendar')
            expect(calendars).toHaveLength(2)
        })

        user.clear(yearInput)
        await user.type(yearInput, '2015')

        user.click(submitButton)
        
        await waitFor(() => {
            const calendars = r.container.querySelectorAll('.calendar')
            expect(calendars).toHaveLength(3)
        })
    })

})
