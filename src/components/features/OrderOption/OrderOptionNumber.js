import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import {formatPrice} from '../../../utils/formatPrice.js';

const OrderOptionNumber = ({required, limits, price, currentValue, setOptionValue}) => (
  <div className={styles.number}>
    <input className={styles.inputSmall}
      type='number'
      value={currentValue}
      min={limits.min}
      max={limits.max}
      onChange={event => setOptionValue(event.currentTarget.value)}
      required={required}
    />
    <span>      </span>
    {formatPrice(price)}
  </div>
);

OrderOptionNumber.propTypes = {
  limits: PropTypes.object,
  required: PropTypes.any,
  setOptionValue: PropTypes.any,
  currentValue: PropTypes.any,
  price: PropTypes.string,
};

export default OrderOptionNumber;
