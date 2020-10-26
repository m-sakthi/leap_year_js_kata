import React, { Component } from 'react';

export default class LeapYearForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      year: '',
      isLeap: false
    }
  }

  setEnteredYear = (e) => {
    this.setState({ year: e.target.value });
  }

  validateLeapYear = () => {
    const { year } = this.state;

    this.setState({ isLeap: (year % 4 === 0) });
  }

  render() {
    const { year, isLeap } = this.state;

    return (
      <div data-testid="leapYearForm">

        <label>Enter year:</label>
        <input
          data-testid="leapYearFormEnterYear"
          type="number"
          onChange={this.setEnteredYear} />
        <br />
        <input
          data-testid="leapYearFormSubmit"
          type="button"
          value="validate"
          onClick={this.validateLeapYear}
        />
        <br />
        <span data-testid="leapYearResult">
          {`Entered year ${year} is ${isLeap ? '' : 'not '}a Leap year.`}
        </span>

      </div>
    )
  }
}
