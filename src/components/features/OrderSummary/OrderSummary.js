import React from 'react';
import styles from './OrderSummary.scss';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';
import PropTypes from 'prop-types';
import {formatStartDate} from '../../../utils/formatStartDate';
import {formatFinishDate} from '../../../utils/formatFinishDate';

const OrderSummary = ({tripCost, options, tripDays}) => {
  const startDate = options['start-date'];
  return (
    <div>
      <h2 className={styles.component}>
        Total: <strong>{formatPrice(calculateTotal(tripCost, options))}</strong>
      </h2>
      <h3>Start of the trip: {formatStartDate(startDate)}</h3>
      <h3>End of the trip: {formatFinishDate(startDate, tripDays)}</h3>
    </div>
  );
};

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  tripDays: PropTypes.number,
};

export default OrderSummary;
