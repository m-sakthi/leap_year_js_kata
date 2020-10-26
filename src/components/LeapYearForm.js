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

  divisibleBy4 = () => (this.state.year % 4 === 0);

  divisbileBy4AndNotBy100 = () => this.divisibleBy4() && (this.state.year % 100 !== 0);

  divisibleBy400 = () => (this.state.year % 400 === 0);

  isALeapYear = () => this.divisibleBy400() || this.divisbileBy4AndNotBy100();

  validateLeapYear = () => {
    this.setState({ isLeap: this.isALeapYear()});
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
