import React from 'react';
import LeapYearForm from './components/LeapYearForm';

const App = () => {
  return <div>
    <h1 data-testid="appHeading">
      LeapYear Kata
    </h1>

    <LeapYearForm />
  </div>
}

export default App;