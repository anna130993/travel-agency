import React from 'react';
import {shallow} from 'enzyme';
import OrderSummary from './OrderSummary';

const select = {
  promoPrice: '.promoPrice',
  promoPriceValue: '.promoPrice strong',
};

const mockProps = {
  cost: '100',
  days: 1,
  options: {},
};

beforeAll(() => {
  const utilsModule = jest.requireActual('../../../utils/calculateTotal.js');
  utilsModule.calculateTotal = jest.fn(cost => cost);
});

describe('Component OrderSummary', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrderSummary {...mockProps} />);
    expect(component).toBeTruthy();
  });

  it('should render promoPrice', () => {
    const component = shallow(<OrderSummary {...mockProps}/>);
    expect(component.exists(select.promoPrice)).toEqual(true);
  });
});
