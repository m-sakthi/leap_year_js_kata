import React, { Component } from 'react';

export default class LeapYearForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      year: ''
    }
  }

  render() {
    return (
      <form testId="leapYearForm">
        <label>Enter year:</label>
        <input
          testId="leapYearFormEnterYear"
          type="number" />
        <br />
        <input
          testId="leapYearFormSubmit"
          type="submit"
          name="Validate"
          value="validate" />
      </form>
    )
  }
}
