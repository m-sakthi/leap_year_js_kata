import React from 'react'; import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import LeapYearForm from '../src/components/LeapYearForm';

configure({ adapter: new Adapter() });

describe('LeapYearForm', () => {
  const yearInputEleQuery = 'input[data-testid="leapYearFormEnterYear"]';
  const divElemQuery = 'div[data-testid="leapYearForm"]';
  const validateBtnQuery = 'input[data-testid="leapYearFormSubmit"]';
  const resultSpanQuery = 'span[data-testid="leapYearResult"]';

  describe("LeapYearForm component render", () => {
    let component;

    beforeEach(() => {
      component = shallow(<LeapYearForm />);
    });

    it("should render properly", () => {
      expect(component).toMatchSnapshot();
    });

    it("should have a div element", () => {
      expect((component.find(divElemQuery)).length).toBe(1);
    });

    it("should have a label element", () => {
      expect((component.find('label')).length).toBe(1);
    });

    it("should have a input number element", () => {
      expect((component.find(yearInputEleQuery)).length).toBe(1);
    });

    it("should have a input button", () => {
      expect((component.find(validateBtnQuery)).length).toBe(1);
    });
  });

  describe("LeapYearForm component functions", () => {
    let component, yearInputEle, submitBtn;

    beforeEach(() => {
      component = shallow(<LeapYearForm />);
      yearInputEle = component.find(yearInputEleQuery);
      submitBtn = component.find(validateBtnQuery);
    });

    it("should set the entered year and check if it a divisible by 4", () => {
      const year = 2020;

      yearInputEle.prop('onChange')({ target: { value: year } });

      submitBtn.prop('onClick')();

      expect(component.find(resultSpanQuery).text()).toEqual(`Entered year ${year} is a Leap year.`);
    });

    it("should check if it a divisible by 4 and not by 100", () => {
      const non_leap_year = 2016;

      yearInputEle.prop('onChange')({ target: { value: non_leap_year } });

      submitBtn.prop('onClick')();

      expect(component.find(resultSpanQuery).text()).toEqual(`Entered year ${non_leap_year} is a Leap year.`);
    });

    it("should check if not divisible by 4 and nor by 100 is not a leap year", () => {
      const non_leap_year = 2015;

      yearInputEle.prop('onChange')({ target: { value: non_leap_year } });

      submitBtn.prop('onClick')();

      expect(component.find(resultSpanQuery).text()).toEqual(`Entered year ${non_leap_year} is not a Leap year.`);
    });

    it("should check if divisible by 400 is a leap year", () => {
      const year = 2000;

      yearInputEle.prop('onChange')({ target: { value: year } });

      submitBtn.prop('onClick')();

      expect(component.find(resultSpanQuery).text()).toEqual(`Entered year ${year} is a Leap year.`);
    });

    it("should check if divisible by 100 and not divisible by 400 is not a leap year", () => {
      const year = 2100;

      yearInputEle.prop('onChange')({ target: { value: year } });

      submitBtn.prop('onClick')();

      expect(component.find(resultSpanQuery).text()).toEqual(`Entered year ${year} is not a Leap year.`);
    });

  });

});