import React from 'react';
import {shallow} from 'enzyme';
import SwitchPhones from './SwitchPhones.js';

const select = {
  icon: 'Icon',
  phone: '.phone',
};

const mockProps = {
  info: 'Office is available 8 AM to 10 PM UTC',
};

describe('Component SwitchPhones', () => {
  it('should render without crashing', () => {
    const component = shallow(<SwitchPhones />);

    expect(component).toBeTruthy();
  });

  it('should render Icon and phone', () => {
    const component = shallow(<SwitchPhones />);

    expect(component.exists(select.icon)).toEqual(true);
    expect(component.exists(select.phone)).toEqual(true);
  });
});

const trueDate = Date;

const mockDate = customDate => class extends Date {
  constructor(...args) {
    if(args.length) {
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now() {
    return (new Date(customDate)).getTime();
  }
};

const checkDescriptionAtTime = (time, expectedDescription) => {
  it(`should show correct at ${time}`, () => {
    global.Date = mockDate(`2020-09-13T${time}.135Z`);

    const component = shallow(<SwitchPhones {...mockProps}/>);
    const renderedPhone = component.find(select.phone).text();

    expect(renderedPhone).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

describe('Component DynamicPhone with mocked time', () => {
  checkDescriptionAtTime('08:00:00', '678.243.8455');
  checkDescriptionAtTime('11:59:59', '678.243.8455');
  checkDescriptionAtTime('12:00:00', '278.443.6443');
  checkDescriptionAtTime('15:59:59', '278.443.6443');
  checkDescriptionAtTime('16:00:00', '167.280.3970');
  checkDescriptionAtTime('21:59:59', '167.280.3970');
  checkDescriptionAtTime('22:00:00', mockProps.info);
  checkDescriptionAtTime('07:59:59', mockProps.info);
});

const checkDescriptionAfterTime = (time, delaySeconds, expectedDescription) => {
  it(`should show correct value ${delaySeconds} seconds after ${time}`, () => {
    global.Date = mockDate(`2020-09-13T${time}.135Z`);
    jest.useFakeTimers();

    const component = shallow(<SwitchPhones {...mockProps} />);

    const newTime = new Date();
    newTime.setSeconds(newTime.getSeconds() + delaySeconds);
    global.Date = mockDate(newTime.getTime());
    jest.advanceTimersByTime(delaySeconds * 1000);

    const renderedPhone = component.find(select.phone).text();
    expect(renderedPhone).toEqual(expectedDescription);

    global.Date = trueDate;
    jest.useRealTimers();
  });
};

describe('Component SwitchPhones with mocked Date and delay', () => {
  checkDescriptionAfterTime('07:59:59', 1, '678.243.8455');
  checkDescriptionAfterTime('11:59:59', 1, '278.443.6443');
  checkDescriptionAfterTime('15:59:59', 1, '167.280.3970');
  checkDescriptionAfterTime('21:59:59', 1, mockProps.info);
});
