import * as React from 'react'
import './App.css';
import DaysFinder from './pages/DaysFinder';

function App() {
  return (
    <div className="App">
        <DaysFinder day={13} weekDay={'friday'} />
    </div>
  );
}

export default App;
