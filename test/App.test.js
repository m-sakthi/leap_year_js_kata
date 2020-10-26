import React from 'react';
import App from '../src/App';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});
describe('App Component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<App />);
  });

  it("should render properly", () => {
    expect(component).toMatchSnapshot();
  });

  it("should have a h1 tag", () => {
    const header = component.find('h1');
    expect(header.text()).toEqual("LeapYear Kata")
  });

})
