import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary.js';
import PropTypes from 'prop-types';
import OrderOption from '../OrderOption/OrderOption.js';
import pricing from '../../../data/pricing.json';
//import styles from './OrderForm.scss';
import settings from '../../../data/settings.js';
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';
import Button from '../../common/Button/Button.js';

const sendOrder = (options, tripCost, tripDays, tripId, tripName, countryCode) => {
  if(options.name!='' && options.contact!=''){
    const totalCost = formatPrice(calculateTotal(tripCost, options));

    const payload = {
      ...options,
      totalCost,
      tripDays,
      tripId,
      tripName,
      countryCode,
    };

    const url = settings.db.url + '/' + settings.db.endpoint.orders;

    const fetchOptions = {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };

    fetch(url, fetchOptions)
      .then(function(response){
        return response.json();
      }).then(function(parsedResponse){
        console.log('parsedResponse', parsedResponse);
      });
  } else {
    alert('Please make sure your contact details are complete!');
  }
};

const OrderForm = ({options, setOrderOption, tripCost, tripDays, tripId, tripName, countryCode}) => (
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
    <Button onClick={() => sendOrder(options, tripCost, tripDays, tripId, tripName, countryCode)}>Order now!</Button>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  tripDays: PropTypes.number,
  tripId: PropTypes.string,
  tripName: PropTypes.string,
  countryCode: PropTypes.string,
};

export default OrderForm;
