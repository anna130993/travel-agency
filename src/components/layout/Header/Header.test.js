import React from 'react';
import {shallow} from 'enzyme';
import Header from './Header.js';

describe('Component Header', () => {
  it('should render with SwitchPhones without crashing', () => {
    const component = shallow(<Header />);

    expect(component.exists('SwitchPhones')).toEqual(true);
  });
});
