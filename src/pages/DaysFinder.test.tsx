import DaysFinder from './DaysFinder'
import { render, screen } from '@testing-library/react'

window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};

describe('DaysFinder component', () => {
    
    it ('should display a form', () => {
        const r = render(<DaysFinder day={13} weekDay={'friday'} />)
        expect(r.getByTestId('form')).not.toBeNull()
    })
})
