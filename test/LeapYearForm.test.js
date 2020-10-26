import React from 'react';import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import LeapYearForm from '../src/components/LeapYearForm';

configure({adapter: new Adapter()});

describe('LeapYearForm Component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<LeapYearForm />);
  });

  it("should render properly", () => {
    expect(component).toMatchSnapshot();
  });

  it("should have a form element", () => {
    expect((component.find('form[testId="leapYearForm"]')).length).toBe(1);
  });

  it("should have a label element", () => {
    expect((component.find('label')).length).toBe(1);
  });

  it("should have a input number element", () => {
    expect((component.find('input[testId="leapYearFormEnterYear"]')).length).toBe(1);
  });

  it("should have a input button", () => {
    expect((component.find('input[testId="leapYearFormSubmit"]')).length).toBe(1);
  });
 
});