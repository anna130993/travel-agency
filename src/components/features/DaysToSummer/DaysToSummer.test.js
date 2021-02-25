import React from 'react';
import {shallow} from 'enzyme';
import DaysToSummer from './DaysToSummer.js';

const select = {
  description: '.description',
};

describe('Component DaysToSummer', () => {
  it('should render without crashing',  () => {
    const component = shallow(<DaysToSummer />);

    expect(component).toBeTruthy();
  });
  it('should render element description', () => {
    const component = shallow(<DaysToSummer />);

    expect(component.exists(select.description)).toEqual(true);
  });
});

const trueDate = Date;
const mockDate = (customDate) =>
  class extends Date {
    constructor(...args) {
      if(args.length) {
        super(...args);
      } else {
        super(customDate);
      } return this;
    }
    static now() {
      return new Date(customDate).getTime();
    }
  };

const checkCorrectDescription = (day, expectedDescription) => {
  it('should show correct descr at given day', () => {
    global.Date = mockDate(`${day}T00:00:00.135Z`);

    const component = shallow(<DaysToSummer />);
    const renderedDescription = component.find(select.description).text();

    expect(renderedDescription).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

describe('Component DaysToSummer with mocked Date', () => {
  checkCorrectDescription('2021-06-21', '');
  checkCorrectDescription('2021-08-18', '');
  checkCorrectDescription('2021-09-22', '');
});

describe('Component DaysToSummer with mocked Date and quantity', () => {
  checkCorrectDescription('2021-02-25', '116 days left till summer!');
  checkCorrectDescription('2021-06-17', '4 days left till summer!');
  checkCorrectDescription('2021-09-24', '270 days left till summer!');
});
