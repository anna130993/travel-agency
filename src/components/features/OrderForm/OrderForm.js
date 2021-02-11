import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary.js';
import PropTypes from 'prop-types';
import OrderOption from '../OrderOption/OrderOption.js';
import pricing from '../../../data/pricing.json';
//import styles from './OrderForm.scss';

const OrderForm = ({options, setOrderOption, tripCost, tripDays}) => (
  <Row>
    {pricing.map(item => (
      <Col md={4} key={item.id}>
        <OrderOption
          {...item}
          currentValue={options[item.id]}
          setOrderOption={setOrderOption}/>
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} options={options} tripDays={tripDays}/>
    </Col>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  tripDays: PropTypes.number,
};

export default OrderForm;
