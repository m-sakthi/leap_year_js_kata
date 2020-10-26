import React, { Component } from 'react';

export default class LeapYearForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      year: 0,
      isLeap: false,
      error: 'Enter a year'
    }
  }

  validateEnteredYear = () => this.state.year <= 0;

  setEnteredYear = (e) => {
    this.setState({ year: e.target.value, error: null });
  }

  divisibleBy4 = () => (this.state.year % 4 === 0);

  divisbileBy4AndNotBy100 = () => this.divisibleBy4() && (this.state.year % 100 !== 0);

  divisibleBy400 = () => (this.state.year % 400 === 0);

  isALeapYear = () => this.divisibleBy400() || this.divisbileBy4AndNotBy100();

  validateLeapYear = () => {
    if (this.validateEnteredYear()) {
      this.setState({ error: 'Enter valid year.' });
    } else {
      this.setState({ isLeap: this.isALeapYear(), error: null });
    }
  }

  render() {
    const { year, isLeap, error } = this.state;

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
          {error ? error : `Entered year ${year} is ${isLeap ? '' : 'not '}a Leap year.`}
        </span>

      </div>
    )
  }
}
