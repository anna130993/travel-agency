import React from 'react';
import styles from './OrderSummary.scss';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';
import PropTypes from 'prop-types';
import {formatStartDate} from '../../../utils/formatStartDate';
import {formatFinishDate} from '../../../utils/formatFinishDate';
import {promoPrice} from '../../../utils/promoPrice';

const OrderSummary = ({tripCost, options, tripDays}) => {
  const startDate = options['start-date'];
  const price = calculateTotal(tripCost, options);
  return (
    <div className={styles.component}>
      <div>
        <h2 className={styles.promoPrice}>Price from <strong>{formatPrice(promoPrice(price, 20))}</strong></h2>
        <h2>Standard price <strong>{formatPrice(price)}</strong></h2>
      </div>
      <div>
        <h3>Start of the trip: {formatStartDate(startDate)}</h3>
        <h3>End of the trip: {formatFinishDate(startDate, tripDays)}</h3>
      </div>
    </div>
  );
};

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  tripDays: PropTypes.number,
};

export default OrderSummary;
