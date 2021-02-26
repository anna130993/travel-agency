import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary.js';

beforeAll(() => {
  const utilsModule = jest.requireActual('../../../utils/promoPrice.js');
  utilsModule.promoPrice = jest.fn(cost => cost);
});

describe('Component TripSummary', () => {
  it ('should generate link to correct address', () => {
    const expectedId = 'unicorn';
    const component = shallow(<TripSummary id={expectedId} tags={[]} />);
    expect (component.find('Link').prop('to')).toEqual('/trip/' + expectedId);
  });
  it ('should have correct src and alt for <img>', () => {
    const expectedSrc = 'img.jpg';
    const expectedAlt = 'alt';
    const component = shallow(<TripSummary image={expectedSrc} name={expectedAlt} tags={[]}/>);

    expect (component.find('img').prop('src')).toEqual(expectedSrc);
    expect (component.find('img').prop('alt')).toEqual(expectedAlt);
  });
  it ('should render name, cost and days properly', () => {
    const expectedName = 'Strange by Celeste';
    const expectedDays = 14;
    const expectedCost = '79,99';
    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} tags={[]} />);

    expect (component.find('h3').text()).toEqual(expectedName);
    expect (component.find('span').first().text()).toEqual(`${expectedDays} days`);
    expect (component.find('span').at(1).text()).toEqual(`from ${expectedCost}`);
  });
  it ('should show error if lacking any of the following - name, cost, days, id  or image', () => {
    expect (() => shallow(<TripSummary />)).toThrow();
  });
  it ('should render span in correct order', () => {
    const tags = ['storm', 'lightning', 'thunder'];
    const component = shallow(<TripSummary tags={[...tags]}/>);

    expect(component.find('.tags span').at(0).text()).toEqual(tags[0]);
    expect(component.find('.tags span').at(1).text()).toEqual(tags[1]);
    expect(component.find('.tags span').at(2).text()).toEqual(tags[2]);
  });
  it ('should crash because of nonexistent tags or empty array', () => {
    const component = shallow(<TripSummary tags={[]} />);

    expect(component.hasClass('tags')).toBe(false);
  });
});
